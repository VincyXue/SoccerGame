const directory = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    // {
    //     question: "Which planet is known as the Red Planet?",
    //     answers: ["Mars", "Jupiter", "Venus"],
    //     correctAnswer: "Mars"
    // },
    // {
    //     question: "Which planet is known as the Red Planet?",
    //     answers: ["Mars", "Jupiter", "Venus"],
    //     correctAnswer: "Mars"
    // },
    // {
    //     question: "Which planet is known as the Red Planet?",
    //     answers: ["Mars", "Jupiter", "Venus"],
    //     correctAnswer: "Mars"
    // },
];

let startButton = document.querySelector('#start');
let questionPage = document.querySelector('#questionPage');
let title = document.querySelector('h1');
let question = document.querySelector('#question');

let questionCount = document.querySelector('#questionCount');

startButton.addEventListener('click', function(){
    let count = 1, i=0, totalQuestion = directory.length;
    startButton.style.display = "none";
    displayQuestion(count, i);
    questionCount.innerText = `${count} of ${totalQuestion}`;


    submitButton.addEventListener('click', function(){
        let selectedAns = document.querySelector('input[name="answer"]:checked');
        let userAnswer = selectedAns.value;
        let correctAnswer = directory[i].correctAnswer;

        if (userAnswer === correctAnswer && count < totalQuestion){
            count ++, i++;
            displayQuestion(count, i);
            questionCount.innerText = `${count} of ${totalQuestion}`;
        }
    })

})

function displayQuestion(count, i) {
    title.innerHTML = `Question ${count}`
    question.innerText = directory[i].question;

    let listElement = document.querySelector('ul');

    listElement.innerHTML = '';

    directory[i].answers.forEach((ele) => {
        let listItem = document.createElement('li');
        listItem.style.listStyleType = 'none';
        listItem.innerText = ele;

        let radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('name', 'answer');
        radioButton.setAttribute('value', ele);
        radioButton.style.float = 'left';

        listItem.appendChild(radioButton);

        listElement.appendChild(listItem);
    })
    questionPage.style.display = "block";
}
