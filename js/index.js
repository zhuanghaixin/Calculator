//
//
// var arr = [];
// var arr_equal = [];
// $('button').click(function(){
//   if(this.innerHTML !== "清除" && this.innerHTML !== "删除" && this.innerHTML !== "=") {
//     if(arr_equal.length === 0) {
//       arr.push(this.innerHTML);
//       $("#show").html(arr.join(''));
//     }
//     else {
//       if(this.innerHTML < 10 && this.innerHTML >=0){
//         arr = [];
//         arr_equal = [];
//         arr.push(this.innerHTML);
//         $("#show").html(arr.join(''));
//       }
//       else {
//         arr = arr_equal;
//         arr_equal = [];
//         arr.push(this.innerHTML);
//         $("#show").html(arr.join(''));
//       }
//     }
//   }
// });
// $("#clean").click(function(){
//   arr = [];
//   arr_equal = [];
//   $("#show").html("");
// });
// $("#delete").click(function(){
//   if(arr_equal.length === 0) {
//     arr.pop();
//     $("#show").html(arr.join(''));
//   }
//   else {
//     arr = arr_equal;
//     arr_equal = [];
//     arr.pop();
//     $(".show").html(arr.join(''));
//   }
// });
// $("#equal").click(function(){
//   $("#show").html(eval(arr.join('')));
//   arr_equal = eval(arr.join('')).toString().split('');
// });


var arr = [];
var arr_equal = [];
var keys = document.getElementById("key");
console.log(keys);
keys.addEventListener('click', function (evt) {
  // console.log("this是");
  // console.log(this);
  // console.log("keys是");
  // console.log(keys);
  console.log("evt.target是");
  console.log(evt.target);
  if (evt.target.innerHTML !== "清除" && evt.target.innerHTML !== "删除" && evt.target.innerHTML !== "=") {
    if (arr_equal.length === 0) {
      arr.push(evt.target.innerHTML);
      var show = document.getElementById("show");
      console.log(show);
      show.innerText = arr.join("");
      console.log("数组是");
      console.log(arr);
    } else {
    }

  }
}, true);

var equal = document.getElementById("equal");
equal.addEventListener('click', function () {
  console.log(1);
  var b = show.innerText;

  console.log(show.innerText);
  // xxx= eval((arr.join('').toString()));
  // console.log(xxx);
  console.log(typeof b);
  console.log(eval(b));
  show.innerText = eval(b);
});

var clean = document.getElementById("clean");
clean.addEventListener('click', function () {

  show.innerText = "";
  arr.length=0;

});
var deleteNumber = document.getElementById("delete");
deleteNumber.addEventListener('click', function () {

  arr.pop();
  show.innerText = arr.join("");
});