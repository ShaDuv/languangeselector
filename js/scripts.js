$(document).ready(function (e) {
      console.log('ready');
      $("button").click(function(){
          event.preventDefault();
          var answers = $('.input').serializeArray();
          var scores = {
            ruby: 0,
            python: 0,
            javascript: 0,
          };
          for (var answer of answers) {
            scores[answer.value] += 1;
            console.log(answer.value);
          } console.log(scores);

          if (scores[python] >= scores[ruby] && scores[python] >= scores[javascript]) {
            return 'Python';
          }
      });
    });
