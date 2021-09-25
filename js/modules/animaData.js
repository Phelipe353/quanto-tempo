export default function initAnimaData() {

}

const selecionado = document.querySelectorAll('.datas li');
const lista = document.querySelectorAll('.opcoes li')
const span = document.querySelectorAll('.datas span');
console.log(lista);
function handleAnimaData(i){
  span.forEach(s=>{
    s.classList.remove('ativo');
  })
  const datas = selecionado[i].querySelectorAll('span');
  datas.forEach((t, i) =>{
    setTimeout(()=>{
      t.classList.add('ativo')
    }, 1000 * i)
  })
}



lista.forEach((o, i) => {
  o.addEventListener('click', ()=>{
    handleAnimaData(i)
  })
})