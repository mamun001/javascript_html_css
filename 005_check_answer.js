

// to run: load check_answer_1_question.html in chrome

function check_answer() {
            given_ans = +document.getElementById('ans').value
            // document.getElementById("eval").innerHTML = typeof given_ans  ; 
            if (given_ans == 4) {
              document.getElementById("eval").innerHTML = 'Correct'  ; 
            } else {
              document.getElementById("eval").innerHTML = 'Incorrect'  ; 
            }
          }

