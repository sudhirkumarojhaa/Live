
//splash screen js
$(".splash").show();
$(".databox").hide();

setTimeout(function () {
  $(".splash").fadeOut();
  $(".databox").show(500);
}, 6000);


// $(document).ready(function () {
//     $("#div1").hide();
//     $("#div1").delay(6000).fadeIn(500);
// });
// window.onload = function () {
//   (function () {
//     var counter = 6;
//     setInterval(function () {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       } else {
//         document.getElementById("count").style.display = "none";
//       }
//       if (counter === 0) {
//         clearInterval(counter);
//       }
//     }, 1000);

//   })();
// };