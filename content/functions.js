$(function() {
  runTime();
});

function digits(i) {
   return (i < 10) ? "0" + i : i;
}

function runTime() {

  var time = new Date(), m;

  (time.getHours() >= 12) ? m = " pm": m = " am";

  var value = time.getHours() + ":" + digits(time.getMinutes()) + ":" + digits(time.getSeconds()) + m;
  $(".clock").text(value);

  setTimeout(function() {
    runTime()
  }, 500);
}
