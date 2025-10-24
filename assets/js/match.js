
// Enkel drag & drop-matchning
function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

const pool = document.getElementById('event-pool');
const detail = document.getElementById('detail');
const dropzones = document.querySelectorAll('.dropzone');

const items = shuffle(EGYPT.matches);

items.forEach((item, idx)=>{
  const chip = document.createElement('div');
  chip.className = 'card-chip';
  chip.textContent = item.text;
  chip.setAttribute('draggable','true');
  chip.setAttribute('tabindex','0');
  chip.dataset.epoch = item.epoch;
  chip.dataset.index = idx.toString();
  chip.addEventListener('dragstart', e=>{
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  });
  chip.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
      chip.classList.toggle('selected');
    }
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
    const correct = zone.dataset.epoch === data.epoch;
    if(correct){
      const placed = document.createElement('div');
      placed.className = 'card-chip';
      placed.textContent = data.text;
      placed.classList.add('correct');
      placed.setAttribute('aria-label', data.text + ' placerad korrekt');
      zone.appendChild(placed);

      // ta bort originalchip
      const original = [...pool.children].find(c=>c.textContent===data.text);
      if(original) original.remove();

      showDetail(data);
    } else {
      zone.classList.add('wrong');
      setTimeout(()=>zone.classList.remove('wrong'), 600);
    }
  });
});

function showDetail(data){
  detail.innerHTML = `<h3>Rätt!</h3>
    <p>${data.explain}</p>
    <p><em>Koppling till epoken:</em> ${EGYPT.epochs[data.epoch].summary}</p>`;
  detail.classList.add('show');
}
