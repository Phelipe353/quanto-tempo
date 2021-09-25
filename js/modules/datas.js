import Countdown from './countdown.js';

export default function initDatas(){
  //Ano atual
  const ano = +JSON.stringify(new Date()).slice(1,5);
  //Datas
  const diaDaMulher = new Countdown (`07 March ${ano} 23:59:59 GMT-0300`);
  const indio = new Countdown (`18 April ${ano} 23:59:59 GMT-0300`);
  const tiradentes = new Countdown (`20 April${ano} 23:59:59 GMT-0300`);
  const descobrimento = new Countdown (`21 April ${ano} 23:59:59 GMT-0300`);
  const trabalhador = new Countdown (`30 April ${ano} 23:59:59 GMT-0300`);
  const maes = new Countdown (`07 May ${ano} 23:59:59 GMT-0300`);
  const namorados = new Countdown (`11 June ${ano} 23:59:59 GMT-0300`);
  const saoJoao = new Countdown (`23 June ${ano} 23:59:59 GMT-0300`);
  const pais = new Countdown (`07 August ${ano} 23:59:59 GMT-0300`);
  const soldado = new Countdown (`24 August ${ano} 23:59:59 GMT-0300`);
  const t7s = new Countdown(`06 September ${ano} 23:59:59 GMT-0300`);
  const criancas = new Countdown(`11 October  ${ano} 23:59:59 GMT-0300`);
  const professores = new Countdown(`14 October  ${ano} 23:59:59 GMT-0300`);
  const bruxas = new Countdown(`30 October  ${ano} 23:59:59 GMT-0300`);
  const santos = new Countdown(`31 October  ${ano} 23:59:59 GMT-0300`);
  const finados = new Countdown(`01 November  ${ano} 23:59:59 GMT-0300`);
  const proclamacao = new Countdown(`14 November  ${ano} 23:59:59 GMT-0300`);
  const bandeira = new Countdown(`18 November  ${ano} 23:59:59 GMT-0300`);
  const negra = new Countdown(`19 November  ${ano} 23:59:59 GMT-0300`);
  const natal = new Countdown (`24 December ${ano} 23:59:59 GMT-0300`);
  const anoNovo = new Countdown(`31 December ${ano} 23:59:59 GMT-0300`);

  const tempos = [diaDaMulher, indio, tiradentes, descobrimento, trabalhador, maes, namorados, saoJoao, pais, soldado,t7s, criancas, professores, bruxas, santos, finados, proclamacao, bandeira, negra, natal, anoNovo];

  const displayDias = document.querySelectorAll('.dias');
  const displayHoras = document.querySelectorAll('.horas');
  const displayMinutos = document.querySelectorAll('.minutos');
  const displaySegundos = document.querySelectorAll('.segundos');


  function atualizaHora(){
    tempos.forEach((t, i) =>{
      const dias = t.total.days;
      //Caso o dia já tenha passado, sera acrescentado 
      //mais 365 dias ou 366 para os anos bissextos
      if(dias < 0){
        if((ano +1) % 4 === 0){
          //Ano bissexto
          const diasB = tempos[i].days + 365;
          displayDias[i].innerText = diasB;
          displayHoras[i].innerText = tempos[i].total.hours +24;
          displayMinutos[i].innerText = tempos[i].total.minutes +60;
          displaySegundos[i].innerText = tempos[i].total.seconds +60;
        }else{
          //Anos normais
          const dias = tempos[i].days + 365;
          displayDias[i].innerText = dias;
          displayHoras[i].innerText = tempos[i].total.hours +24;
          displayMinutos[i].innerText = tempos[i].total.minutes + 60;
          displaySegundos[i].innerText = tempos[i].total.seconds +60;
        }
      }else{
        //Eventos que ainda vão correr no ano atual
        displayDias[i].innerText = tempos[i].days;
        displayHoras[i].innerText = tempos[i].total.hours;
        displayMinutos[i].innerText = tempos[i].total.minutes;
        displaySegundos[i].innerText = tempos[i].total.seconds;
      }
    })
  }
  atualizaHora();

  setInterval(() => {
    atualizaHora();
  }, 1000);

}