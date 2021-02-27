
var question_answer = {
  question1: Math.floor(Math.random() * 10),
  question2: Math.floor(Math.random() * 10),
  answer_inside: parseInt(this.question1 + this.question2),
};


console.log(typeof(check_answer()));
console.log(check_answer());

console.log(typeof(question_answer.answer_inside))
console.log(question_answer.answer_inside)

function check_answer() {
          real_ans = question_answer.question1 + question_answer.question2;
          return real_ans;
          }




