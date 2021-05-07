function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}


const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.btnIniciar');
const btnPausar = document.querySelector('.btnPausar');
const btnZerar = document.querySelector('.btnZerar');
let segundos = 0;
let timer;


function iniciarRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}
btnIniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciarRelogio();
})


btnPausar.addEventListener('click', function (event) {
  relogio.classList.add('pausado')
  clearInterval(timer);
})
btnZerar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});
