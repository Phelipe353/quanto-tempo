export default function detalheInicial( ) { 

  const button = document.querySelector('.seleciona button');
  const divIntro = document.querySelector('.seleciona');
  function typeWrite(elemento){
    elemento.classList.add('activo');
    divIntro.classList.add('activo');
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=>{
      //Anima as letras
      setTimeout(() => {
        setTimeout(()=>{
          elemento.innerHTML += letra;
        }, 75 * i)
      }, 1500);
      //Remove after
      setTimeout(() => {
        setTimeout(()=>{
          elemento.classList.remove('anima');
        }, 75 * i)
      }, 5000);
      //Posiciona a div
      setTimeout(() => {
        setTimeout(()=>{
          divIntro.classList.add('final');
        }, 75 * i)
      }, 6000);
      //Mostra o button
      setTimeout(() => {
        setTimeout(()=>{
          button.classList.add('activo');
        }, 75 * i)
      }, 7000);
    })
  }  
  typeWrite(document.querySelector('section h1'));

}