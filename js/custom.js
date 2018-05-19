
//splash screen js
$(".splash").show();
$(".databox").hide();

setTimeout(function () {
  $(".splash").fadeOut(100);
  $(".databox").show(500);
}, 4000);

