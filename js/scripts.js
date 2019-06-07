$(document).ready(function (e) {
      console.log('ready');
      var answers = $('.input').serializeArray();
      var scores = {
        ruby: 0,
        python: 0,
        javascript: 0,
      };
      for (var answer of answers) {
        scores[answer.value] += 1;}
      console.log(scores);
      for (var program in answer) {
        console.log(scores[program]);
      }
    });
