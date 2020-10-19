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




// addEventListener("click",function() {
//   let tele1_1 = document.getElementById("buttun1ok").innerText;
//   let tele2_1 = document.getElementById("buttun2ok").innerText;
//   let tele3_1 = document.getElementById("buttun3ok").innerText;
//   let tele4_1 = document.getElementById("buttun4ok").innerText;
//   let check_form = document.getElementById("check-form");
//   let check_text = document.getElementById("check-text");
//   let check_buttun = document.getElementById("check-submit");

  // check_ok.innerText ="";

   //Submit値を操作したい場合はこんな感じでできます。
  //  check_form.value = "hoge";  // 例）name="hid1"の値を"hoge"にする
 
   //Submit形式指定する（post/get）
  //  check_form.method = "post";  // 例）POSTに指定する

//   check_buttun.click(function(e) {
// if (tele1_1 != "" && tele1_1 == tele2_1 && tele3_1 == tele4_1 && tele2_1 == tele3_1 ){
//   check_text.value = "2";
//   check_form.submit();
//   return e.preventDefault();  
// };
//   });
// });

addEventListener("click",function() {
  let ttele1_1 = document.getElementById("buttun1ok").innerText;
  let ttele2_1 = document.getElementById("buttun2ok").innerText;
  let ttele3_1 = document.getElementById("buttun3ok").innerText;
  let ttele4_1 = document.getElementById("buttun4ok").innerText;
  let check_text = document.getElementById("check-text");
  let check_form = document.getElementById("check-form");
  let check_ok = document.getElementById("check_ok");


  check_ok.innerText = "";

  if (ttele1_1 != "" && ttele1_1 == ttele2_1 && ttele3_1 == ttele4_1 && ttele2_1 == ttele3_1 ){
    check_text.value = "2";
  check_form.submit();
    check_ok.innerText = "お疲れ様でした！";
  };
  });

// addEventListener("click",function() {
//   let ele1_1 = document.getElementById("buttun1ok").innerText;
//   let ele2_1 = document.getElementById("buttun2ok").innerText;
//   let ele3_1 = document.getElementById("buttun3ok").innerText;
//   let ele4_1 = document.getElementById("buttun4ok").innerText;
//   let check_submit = document.getElementById("check-submit");
  
//   //formオブジェクトを取得する
//   let check_form = document.getElementById("check-form");
 
//   //Submit値を操作したい場合はこんな感じでできます。
//   check_form.value = "hoge";  // 例）name="hid1"の値を"hoge"にする
 
//   //Submit形式指定する（post/get）
//   check_form.method = "post";  // 例）POSTに指定する
 
//   //Submit実行
//   if (ele1_1 != "" && ele1_1 == ele2_1 && ele3_1 == ele4_1 && ele2_1 == ele3_1 ){
//   check_form.submit();
//   };    
// });


