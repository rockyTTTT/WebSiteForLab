const baseSize = 192

function setRem() {
  console.log(document.documentElement.clientWidth);
  const scale = document.documentElement.clientWidth / 1920;
  document.documentElement.style.fontSize = (baseSize * scale * 1.1) + 'px';

}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}