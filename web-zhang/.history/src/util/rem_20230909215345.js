const baseSize = 151

function setRem() {
    console.log(document.documentElement.clientWidth);
  const scale = document.documentElement.clientWidth / 1100;
  document.documentElement.style.fontSize = (baseSize * scale) + 'px';

}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}