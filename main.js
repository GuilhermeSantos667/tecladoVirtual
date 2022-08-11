const keys = document.querySelectorAll('.key') //fazendo selecionar todos os elementos que tem a classe key
console.log(keys)

function playNote(event) {
  let audioKeyCode = getKeyCode(event)

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
    return
  }

  addPlayClass(key)
  playAudio(audioKeyCode)
} //funçao para tocar a nota
function addPlayClass(key) {
  key.classList.add('playing')
} //adiciona a classe playing

function getKeyCode(event) {
  let keyCode

  const isKeyBoard = event.type === 'keydown' //se o evento for keydown

  if (isKeyBoard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }
  return keyCode
} //funçao para pegar o codigo da tecla
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
} //funçao para tocar o audio

function removePLayingClass(event) {
  event.target.clssList.remove('playing')
} //remove a classe playing
//click with mouse
function register() {
  keys.forEach(function (key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
  })
  
  //keybord type
  window.addEventListener('keydown', playNote) //sempre que eu apertar uma tecla eu chamo a função playNote
} 

window.addEventListener("load", register) //quando a pagina for carregada eu chamo a função register
