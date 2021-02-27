//will execute when the page loads
//so that we are sure the h6 did indeed load.
onload = function() {
  document.querySelector('h77').innerHTML = question_answer.question;
}

var question_answer = {
  question: "What is 2 + 3 ?",
  answer: "5", 
};


function check_answer() {
            given_ans = document.getElementById('ans').value
            // document.getElementById("eval").innerHTML = typeof given_ans  ; 
            if (given_ans == question_answer.answer) {
              document.getElementById("eval").innerHTML = 'Correct'  ; 
            } else {
              document.getElementById("eval").innerHTML = 'Incorrect'  ; 
            }
          }




