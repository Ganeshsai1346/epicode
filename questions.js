var data = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["grey", "#00fff0"],
      },
    ],
  };
  var promisedDeliveryChart = new Chart(
    document.getElementById("myChart"),
    {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        cutoutPercentage: 75,
        borderWidth: 0,
        //rotation: 120,
        legend: {
          display: false,
        },
      },
    }
  );
  let myQuestions = [
    {
        question: 'How can I create a checkbox in HTML?',
        answers:{
            a: "<input type = 'check'>",
            b: "<input type = 'checkbox'>",
            c: "<checkbox>",
            d: "<input type = 'button'>",
        },
        correctAnswer: "b"

    },
    {
        question: 'How do you call a function named "foo"?',
        answers:{
            a: "foo;",
            b: "call function foo();",
            c: "foo();",
            d: "function foo();"
        },
        correctAnswer: 'c'
    },
    {
        question: 'Which of the following is a primitive data types in JavaScript?',
        answers:{
            a: "Boolean",
            b: "Number",
            c: "String",
            d: "All the above"
        },
        correctAnswer: 'd'
    }
]


let currentQuiz = 0


function loadQuiz(){
  
  let questionEl = document.getElementById("question")
  const currentQuizData = myQuestions[currentQuiz].question

  questionEl.innerText = currentQuizData
 
}

loadQuiz()
