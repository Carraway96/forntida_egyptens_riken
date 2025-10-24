
const qBox = document.getElementById('question');
const optBox = document.getElementById('options');
const nextBtn = document.getElementById('next');
const detail = document.getElementById('quiz-detail');
const progress = document.getElementById('progress');

let order = [...EGYPT.quiz.keys()];
order.sort(()=>Math.random()-0.5);
let idx = 0;
let answered = 0;

function render(){
  detail.classList.remove('show');
  detail.innerHTML='';
  nextBtn.disabled = true;
  const q = EGYPT.quiz[order[idx]];
  qBox.textContent = q.q;
  optBox.innerHTML = '';
  q.options.forEach((opt, i)=>{
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.addEventListener('click', ()=>select(i, q));
    optBox.appendChild(btn);
  });
  progress.textContent = `Fråga ${idx+1} av ${EGYPT.quiz.length}`;
}
render();

function select(i, q){
  const options = [...optBox.children];
  options.forEach(el=>{ el.disabled = true; el.style.cursor='default'; });
  if(i === q.answer){
    options[i].classList.add('correct');
    detail.innerHTML = `<h3>Rätt!</h3><p>${q.detail}</p>`;
    answered++;
  } else {
    options[i].classList.add('wrong');
    options[q.answer].classList.add('correct');
    detail.innerHTML = `<h3>Inte riktigt.</h3><p>${q.detail}</p>`;
  }
  detail.classList.add('show');
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', ()=>{
  idx++;
  if(idx >= EGYPT.quiz.length){
    qBox.textContent = 'Klart!';
    optBox.innerHTML = '';
    nextBtn.style.display = 'none';
    progress.textContent = `Du hade ${answered} av ${EGYPT.quiz.length} rätt.`;
    detail.innerHTML += `<p><em>Tips:</em> Testa de andra spelen för att förstärka dina kunskaper.</p>`;
    detail.classList.add('show');
  } else {
    render();
  }
});
