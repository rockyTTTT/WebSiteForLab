const baseSize = 110

function setRem() {
  const scale = document.documentElement.clientWidth / 1100;
  document.documentElement.style.fontSize = (baseSize * scale) + 'px';

}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}