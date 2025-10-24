
const scale = document.getElementById('timeline-scale');
const pool = document.getElementById('timeline-event-pool');
const detailBox = document.getElementById('timeline-detail');

function drawScale(){
  const ticks = [
    {y:-2700, label:'Gamla riket start'},
    {y:-2200, label:'Gamla riket slut'},
    {y:-2050, label:'Mellersta riket start'},
    {y:-1650, label:'Mellersta riket slut'},
    {y:-1550, label:'Nya riket start'},
    {y:-1070, label:'Nya riket slut'}
  ];
  const min = -2700, max = -1070;
  scale.innerHTML = '';
  ticks.forEach(t=>{
    const pos = ((t.y - min)/(max - min))*100;
    const tick = document.createElement('div');
    tick.className = 'tick';
    tick.style.left = pos + '%';
    scale.appendChild(tick);

    const lbl = document.createElement('div');
    lbl.className = 'tick-label';
    lbl.style.left = pos + '%';
    lbl.textContent = Math.abs(t.y) + ' f.v.t.';
    scale.appendChild(lbl);
  });
}
drawScale();

function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

shuffle(EGYPT.timelineCards).forEach(ev=>{
  const card = document.createElement('div');
  card.className = 'timeline-card';
  card.textContent = ev.label;
  card.setAttribute('draggable','true');
  card.addEventListener('dragstart', e=>{
    e.dataTransfer.setData('text/plain', JSON.stringify(ev));
  });
  pool.appendChild(card);
});

document.querySelectorAll('.epoch-drop').forEach(drop=>{
  drop.addEventListener('dragover', e=>{ e.preventDefault(); drop.classList.add('highlight'); });
  drop.addEventListener('dragleave', ()=> drop.classList.remove('highlight'));
  drop.addEventListener('drop', e=>{
    e.preventDefault();
    drop.classList.remove('highlight');
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const ok = (data.epochs || []).includes(drop.dataset.epoch);
    if(ok){
      const placed = document.createElement('div');
      placed.className = 'card-chip correct';
      placed.textContent = data.label;
      drop.appendChild(placed);
      const card = [...pool.children].find(c=>c.textContent===data.label);
      if(card) card.remove();
      detailBox.innerHTML = `<h3>Rätt!</h3><p>${data.explain}</p>`;
      detailBox.classList.add('show');
    } else {
      drop.classList.add('wrong');
      setTimeout(()=>drop.classList.remove('wrong'), 500);
      detailBox.innerHTML = `<h3>Inte riktigt.</h3><p>Den här händelsen hör inte främst till <strong>${EGYPT.epochs[drop.dataset.epoch].name}</strong>. Försök en annan epok.</p>`;
      detailBox.classList.add('show');
    }
  });
});
