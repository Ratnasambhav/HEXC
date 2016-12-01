function getColor(){
  return '#' + Math.random().toString(16).slice(2,8);
}

function setColor(){
  // document.body.style.background = color;
  var color = getColor();
  $('#div1').css('background-color', color);
  document.getElementById("hex1").innerHTML = color;
  var color = getColor();
  $('#div2').css('background-color', color);
  document.getElementById("hex2").innerHTML = color;
  var color = getColor();
  $('#div3').css('background-color', color);
  document.getElementById("hex3").innerHTML = color;
  var color = getColor();
  $('#div4').css('background-color', color);
  document.getElementById("hex4").innerHTML = color;
  var color = getColor();
}


$(function() {
   $(window).keypress(function(e) {
       var ev = e || window.event;
       if(e.keyCode == 32 && e.target == document.body){
        setColor();
        e.preventDefault();
        return false;
       }
   });
});
