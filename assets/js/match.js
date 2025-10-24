
// Drag & drop-matchning (tydlig feedback)
function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

const pool = document.getElementById('event-pool');
const detail = document.getElementById('detail');
const dropzones = document.querySelectorAll('.dropzone');

const items = shuffle(EGYPT.matches);

items.forEach((item)=>{
  const chip = document.createElement('div');
  chip.className = 'card-chip';
  chip.textContent = item.text;
  chip.setAttribute('draggable','true');
  chip.setAttribute('tabindex','0');
  chip.dataset.epochs = JSON.stringify(item.epochs);
  chip.addEventListener('dragstart', e=>{
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  });
  pool.appendChild(chip);
});

dropzones.forEach(zone=>{
  zone.addEventListener('dragover', e=>{
    e.preventDefault();
    zone.classList.add('highlight');
  });
  zone.addEventListener('dragleave', ()=> zone.classList.remove('highlight'));
  zone.addEventListener('drop', e=>{
    e.preventDefault();
    zone.classList.remove('highlight');
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const ok = (data.epochs || []).includes(zone.dataset.epoch);
    if(ok){
      const placed = document.createElement('div');
      placed.className = 'card-chip correct';
      placed.textContent = data.text;
      zone.appendChild(placed);

      // remove from pool
      const original = [...pool.children].find(c=>c.textContent===data.text);
      if(original) original.remove();

      showDetail(data, zone.dataset.epoch);
    } else {
      zone.classList.add('wrong');
      setTimeout(()=>zone.classList.remove('wrong'), 600);
      detail.innerHTML = `<h3>Inte riktigt.</h3>
        <p>Det här kortet hör inte främst till <strong>${EGYPT.epochs[zone.dataset.epoch].name}</strong>. Prova en annan epok.</p>`;
      detail.classList.add('show');
    }
  });
});

function showDetail(data, epoch){
  detail.innerHTML = `<h3>Rätt!</h3>
    <p>${data.explain}</p>
    <p><em>Koppling till epoken:</em> ${EGYPT.epochs[epoch].summary}</p>`;
  detail.classList.add('show');
}
