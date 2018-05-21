
//splash screen js
$(".splash").show();
$(".databox").hide();

setTimeout(function () {
  $(".splash").fadeOut(100);
  $(".databox").fadeIn(500);
}, 1500);

