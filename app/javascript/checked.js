addEventListener("load",function() {
let ele1_1 = document.getElementById("buttun1ok");
let ele1_2 = document.getElementById("buttun1ng");
let ele2_1 = document.getElementById("buttun2ok");
let ele2_2 = document.getElementById("buttun2ng");
let ele3_1 = document.getElementById("buttun3ok");
let ele3_2 = document.getElementById("buttun3ng");
let ele4_1 = document.getElementById("buttun4ok");
let ele4_2 = document.getElementById("buttun4ng");

ele1_2.innerText = "×";
ele2_2.innerText = "×";
ele3_2.innerText = "×";
ele4_2.innerText = "×";

ele1_1.onclick = function(){
  ele1_1.innerText = "";
  ele1_2.innerText = "×";
};
ele1_2.onclick = function(){
  ele1_2.innerText = "";
  ele1_1.innerText = "○";
};

ele2_1.onclick = function(){
  ele2_1.innerText = "";
  ele2_2.innerText = "×";
};

ele2_2.onclick = function(){
  ele2_2.innerText = "";
  ele2_1.innerText = "○";
};

ele3_1.onclick = function(){
  ele3_1.innerText = "";
  ele3_2.innerText = "×";
};

ele3_2.onclick = function(){
  ele3_2.innerText = "";
  ele3_1.innerText = "○";
};

ele4_1.onclick = function(){
  ele4_1.innerText = "";
  ele4_2.innerText = "×";
};

ele4_2.onclick = function(){
  ele4_2.innerText = "";
  ele4_1.innerText = "○";
};
});

addEventListener("click",function() {
  let ele1_1 = document.getElementById("buttun1ok").innerText;
  let ele2_1 = document.getElementById("buttun2ok").innerText;
  let ele3_1 = document.getElementById("buttun3ok").innerText;
  let ele4_1 = document.getElementById("buttun4ok").innerText;
  let check_form = document.getElementById("check-form");
 
if (ele1_1 != "" && ele1_1 == ele2_1 && ele3_1 == ele4_1 && ele2_1 == ele3_1 ){
  // check_text.value = "2";
  check_form.submit();
    alert("お疲れ様でした！\n閉店チェックOKです。\n気をつけて帰って下さい。");
 };
});
