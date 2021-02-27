//will execute when the page loads
//so that we are sure the h6 did indeed load.
onload = function() {
  document.querySelector('h11').innerHTML = question_answer.question1;
  document.querySelector('h12').innerHTML = question_answer.question2;
}

var question_answer = {
  question1: Math.floor(Math.random() * 10),
  question2: Math.floor(Math.random() * 10),
};


function check_answer() {
            real_ans = question_answer.question1 + question_answer.question2;
            given_ans = parseInt(document.getElementById('ans').value)
            if (given_ans == real_ans) {
              document.getElementById("eval").innerHTML = 'Correct'  ; 
            } else {
              document.getElementById("eval").innerHTML = 'Incorrect'  ; 
            }
          console.log(question_answer.question1);
          console.log(typeof(question_answer.question1));
          console.log(question_answer.question2);
          console.log(typeof(question_answer.question2));
          console.log(real_ans);
          console.log(typeof(real_ans));
          console.log(given_ans);
          console.log(typeof(given_ans));
          }




