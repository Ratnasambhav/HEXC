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

$(function() {
   $(window).keypress(function(e) {
       var ev = e || window.event;
       if(ev.keyCode == 32){
        //  setAndPrintColor();
        $('#div1').css('background-color', getColor());
        $('#div2').css('background-color', getColor());
        $('#div3').css('background-color', getColor());
        $('#div4').css('background-color', getColor());
       }
   });
});
