
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



//    var count = 1;
//    function setColor(btn, color) {
//        var property = document.getElementById('buttun1');
//        if (count == 0) {
//            property.style.backgroundColor = "#FFFFFF"
//            count = 1;        
//        }
//        else {
//            property.style.backgroundColor = "#7FFF00"
//            count = 0;
//        }
//    }
// window.addEventListener("load", check);


// document.getElementById('buttun1').addEventListener('click',function(){
//   document.getElementById('buttun1').style.background = 'pink';
// })

// window.addEventListener("load", check);

// function check() {
//   const posts = document.querySelectorAll(".post");
//   posts.forEach(function (post) {
//     post.addEventListener("click", () => { });
//    });
// }
// window.addEventListener("load", check);

// function price(){
//   const priceInput = document.getElementById("item-price");
//   const add_tax = document.getElementById("add-tax-price");
//   const profit = document.getElementById("profit");
//     priceInput.addEventListener('input', function()  {
//         const value = priceInput.value; 
        
//       if (value >= 300 && value <= 9999999){
//        let fee = Math.floor(value * 0.1)
//        let gains = value - fee;
//         add_tax.textContent = fee;
//         profit.textContent = gains;
//     } else {
//       let fee = ' ';
//       let gains = ' ';
//       add_tax.textContent = fee;
//       profit.textContent = gains;
//     }
//   });
 
//  }
//  window.addEventListener('DOMContentLoaded', price);