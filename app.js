function getColor(){
  return '#' + Math.random().toString(16).slice(2,8);
}

function setColor(color){
  document.body.style.background = color;
}

function setAndPrintColor(){
  var color = getColor();
  setColor(color);
  document.getElementById("hex").innerHTML = color;
}
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    setAndPrintColor();
  }
};

//document.getElementById("change").addEventListener("click", setAndPrintColor);
