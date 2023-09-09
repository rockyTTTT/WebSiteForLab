const baseSize = 37.5

function setRem() {
  const scale = document.documentElement.clientWidth / 1512
  console.log('document.documentElement.clientWidth',document.documentElement.clientWidth);
  document.documentElement.style.fontSize = (baseSize * scale) + 'px'
}

setRem()
window.onresize = function () {
  setRem()
}

export {
  
}