const baseSize = 192

function setRem() {
  console.log(document.documentElement.clientWidth);
  const scale = document.documentElement.clientWidth / 1920;
  if(scale < 0.5){
    document.documentElement.style.fontSize = (baseSize * (scale * 1.4)) + 'px';
  }else{
    document.documentElement.style.fontSize = (baseSize * scale) + 'px';
  }

}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}