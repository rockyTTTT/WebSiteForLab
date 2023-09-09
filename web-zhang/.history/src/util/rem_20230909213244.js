const baseSize = 25

function setRem() {
  const scale = document.documentElement.clientWidth / 375
  console.log('document.documentElement.style.fontSize',document.documentElement.style.fontSize);
  console.log('scale',scale);
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 4)) + 'px'
  console.log('document.documentElement.style.fontSize',document.documentElement.style.fontSize);
}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}