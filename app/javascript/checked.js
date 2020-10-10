
function check() {
document.getElementById('buttun1').onclick = function(){
  document.getElementById('buttun1').style.background = 'pink';
}

document.getElementById('buttun2').onclick = function(){
  document.getElementById('buttun2').style.background = 'pink';
}

document.getElementById('buttun3').onclick = function(){
  document.getElementById('buttun3').style.background = 'pink';
}

document.getElementById('buttun4').onclick = function(){
  document.getElementById('buttun4').style.background = 'pink';
}

document.getElementById('buttun5').onclick = function(){
  document.getElementById('buttun1').style.background = '#abced8';
  document.getElementById('buttun2').style.background = '#abced8';
  document.getElementById('buttun3').style.background = '#abced8';
  document.getElementById('buttun4').style.background = '#abced8';
}
}

window.addEventListener("load", check);


