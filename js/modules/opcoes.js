export default function initOpcoes (){
  const seleciona = document.querySelector('.seleciona button');
  const lista = document.querySelector('.opcoes');
  const opcoes = document.querySelectorAll('.opcoes li');
  const data = document.querySelectorAll('.datas li');
  

  function handleOptions(i){
    data.forEach(d =>{
    d.classList.remove('ativo')})

    data[i].classList.add('ativo');
    lista.classList.toggle('ativo');

    seleciona.innerText = opcoes[i].innerText;
  }
  
  function handleBoxOptions(){
    lista.classList.toggle('ativo');
    data.forEach(d =>{
      d.classList.remove('ativo')})
  }

  
  opcoes.forEach( (d, i)=> {
    d.addEventListener('click', ()=>{
      handleOptions(i)
  })})
  seleciona.addEventListener('click', handleBoxOptions);
}

