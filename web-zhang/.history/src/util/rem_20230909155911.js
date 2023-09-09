const baseSize = 37.5

function setRem() {
  const scale = document.documentElement.clientWidth / 375
  console.log('document.documentElement.clientWidth',document.documentElement.clientWidth);
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 3)) + 'px'
}

setRem()
window.onresize = function () {
  setRem()
}

export {
  
}