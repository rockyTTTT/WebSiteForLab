const baseSize = 150

function setRem() {
  const scale = document.documentElement.clientWidth / 375
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 4)) + 'px'
}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}