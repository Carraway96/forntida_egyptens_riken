
// Tidslinje: skala från -2700 till -1000
const scale = document.getElementById('timeline-scale');
const droparea = document.getElementById('timeline-droparea');
const pool = document.getElementById('timeline-event-pool');
const detailBox = document.getElementById('timeline-detail');

const MIN = -2700, MAX = -1000;
const WIDTH = scale.clientWidth || 800;

function yearToPercent(y){
  return ((y - MIN) / (MAX - MIN)) * 100;
}

function drawScale(){
  scale.innerHTML = '';
  const ticks = [-2700,-2500,-2300,-2100,-1900,-1700,-1500,-1300,-1100,-1000];
  ticks.forEach(y=>{
    const t = document.createElement('div');
    t.className = 'tick';
    t.style.left = yearToPercent(y) + '%';
    scale.appendChild(t);

    const label = document.createElement('div');
    label.className = 'tick-label';
    label.style.left = `calc(${yearToPercent(y)}% - 18px)`;
    label.textContent = Math.abs(y) + ' f.v.t.';
    scale.appendChild(label);
  });
}
drawScale();

// skapa drop spots för varje event
EGYPT.timeline.forEach((ev, i)=>{
  const spot = document.createElement('div');
  spot.className = 'timeline-spot';
  spot.style.left = `calc(${yearToPercent(ev.year)}% - 90px)`;
  spot.style.top = ( (i%3)*85 ) + 'px';
  spot.dataset.year = ev.year;
  droparea.appendChild(spot);
});

// skapa kort i banken
EGYPT.timeline.forEach((ev)=>{
  const card = document.createElement('div');
  card.className = 'timeline-card';
  card.textContent = ev.label;
  card.setAttribute('draggable','true');
  card.addEventListener('dragstart', e=>{
    e.dataTransfer.setData('text/plain', JSON.stringify(ev));
  });
  pool.appendChild(card);
});

// droplogik
droparea.querySelectorAll('.timeline-spot').forEach(spot=>{
  spot.addEventListener('dragover', e=>{ e.preventDefault(); });
  spot.addEventListener('drop', e=>{
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const targetYear = parseInt(spot.dataset.year,10);
    // rätt om inom ±40 år (pedagogisk tolerans)
    if(Math.abs(data.year - targetYear) <= 40){
      spot.innerHTML = '';
      const placed = document.createElement('div');
      placed.className = 'timeline-card correct';
      placed.textContent = data.label;
      spot.appendChild(placed);
      detailBox.innerHTML = `<h3>Rätt plats!</h3><p>${data.explain}</p>`;
      detailBox.classList.add('show');
      // Ta bort från banken
      const card = [...pool.children].find(c=>c.textContent===data.label);
      if(card) card.remove();
    } else {
      detailBox.innerHTML = `<h3>Nästan!</h3><p>Försök flytta händelsen närmare rätt tid. Tänk på epokernas ordning.</p>`;
      detailBox.classList.add('show');
    }
  });
});
