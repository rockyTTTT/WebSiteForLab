const baseSize = 37.5

function setRem() {
  const scale = document.documentElement.clientWidth / 375
  if(scale > 4){
    document.documentElement.style.fontSize = (baseSize * 4) + 'px'
  }else{
    document.documentElement.style.fontSize = (baseSize * 3) + 'px'
  }
}

setRem()

window.onresize = function () {
  setRem()
}



export {
  
}