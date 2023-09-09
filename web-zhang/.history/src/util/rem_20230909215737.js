const baseSize = 151

function setRem() {
  console.log(document.documentElement.clientWidth);
  const scale = document.documentElement.clientWidth / 1511;
  document.documentElement.style.fontSize = (baseSize * scale * 0.9) + 'px';

}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}