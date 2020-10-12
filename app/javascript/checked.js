addEventListener("load",function() {

let ele1_1 = document.getElementById('buttun1ok');
let ele1_2 = document.getElementById('buttun1ng');
let ele2_1 = document.getElementById('buttun2ok');
let ele2_2 = document.getElementById('buttun2ng');
let ele3_1 = document.getElementById('buttun3ok');
let ele3_2 = document.getElementById('buttun3ng');
let ele4_1 = document.getElementById('buttun4ok');
let ele4_2 = document.getElementById('buttun4ng');

const ok1_1 = ele1_1.style.display;
const ng1_1 = ele1_2.style.display;
const ok2_1 = ele2_1.style.display;
const ng2_1 = ele2_2.style.display;
const ok3_1 = ele3_1.style.display;
const ng3_1 = ele3_2.style.display;
const ok4_1 = ele4_1.style.display;
const ng4_1 = ele4_2.style.display;

ele1_1.style.display = 'none';
ele2_1.style.display = 'none';
ele3_1.style.display = 'none';
ele4_1.style.display = 'none';

ele1_1.onclick = function(){
  ele1_1.style.display = 'none';
  ele1_2.style.display = ng1_1;
}
ele1_2.onclick = function(){
  ele1_2.style.display = 'none';
  ele1_1.style.display = ok1_1;
}

ele2_1.onclick = function(){
  ele2_1.style.display = 'none';
  ele2_2.style.display = ng2_1;
}

ele2_2.onclick = function(){
  ele2_2.style.display = 'none';
  ele2_1.style.display = ok2_1;
}

ele3_1.onclick = function(){
  ele3_1.style.display = 'none';
  ele3_2.style.display = ng3_1;
}

ele3_2.onclick = function(){
  ele3_2.style.display = 'none';
  ele3_1.style.display = ok3_1;
}

ele4_1.onclick = function(){
  ele4_1.style.display = 'none';
  ele4_2.style.display = ng4_1;
}

ele4_2.onclick = function(){
  ele4_2.style.display = 'none';
  ele4_1.style.display = ok4_1;
}

function judge() {
  // 勝ち
  if((ele1_1.style.display = 'none'; && ele2_1.style.display = 'none'; && ele3_1.style.display = 'none';&& ele2_1.style.display = 'none';) 
      displayResult("you win!", "win");
      return;
  }

// 結果の表示
function displayResult(res, cName) {
  $("result").innerHTML = res;
  $("result").className = cName;
  isRun = false;
}

})


