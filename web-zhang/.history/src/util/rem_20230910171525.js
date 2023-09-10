const baseSize = 192

function setRem() {
  console.log(document.documentElement.clientWidth);
  const scale = document.documentElement.clientWidth / 1920;
  document.documentElement.style.fontSize = (baseSize * Math.max(1,scale)) + 'px';

}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}