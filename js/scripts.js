$(document).ready(function () {
    $('#quiz').submit(function (event) {
      event.preventDefault();
      var answers = $(this).seriaolizeArray();
      console.log(answers);
    });
  });
