const quizData = [
    {
        question: 'What is the name of the biggest technology company in South Korea?',
        a: 'Xiaomi',
        b: 'Samsung',
        c: 'Apple',
        d: 'Nokia',
        correct: 'b'
    },
    {
        question: 'What is the name of the band with the following members: John Deacon, Brian May, Freddie Mercury, Roger Taylor?',
        a: 'Beach Boys',
        b: 'Metallica',
        c: 'Beatles',
        d: 'Queen',
        correct: 'd'
    },
    {
        question: 'Name the country in which Statue of Liberty can be found',
        a: 'Cambodia',
        b: 'Australia',
        c: 'United States of America',
        d: 'North Korea',
        correct: 'c'
    },
    {
        question: 'To the nearest thousand, how many hairs are there on a typical human head?',
        a: '10,000 hairs',
        b: '9,000 hairs',
        c: '8,000 hairs',
        d: '7,000 hairs',
        correct: 'a'
    },
    {
        question: 'What’s the average surface temperature on Venus?',
        a: '3204°C',
        b: '460°C',
        c: '200°C',
        d: '60°C',
        correct: 'b'
    }
]

const container = document.querySelector('.quiz_container')
const questionEl = document.querySelector('.mainQuestion')
const radios = document.querySelectorAll('.radio')
const first = document.getElementById('A');
const second = document.getElementById('B');
const third = document.getElementById('C');
const fourth = document.getElementById('D');
const submitBtn = document.querySelector('.submitBtn')

let curQuestion = 0;
let answers = [];



loadQuiz()

function loadQuiz() {   
    
    let currentQuiz = quizData[curQuestion];

    if(curQuestion < 5) {

    questionEl.innerHTML = currentQuiz.question;
    first.innerHTML = currentQuiz.a
    second.innerHTML = currentQuiz.b
    third.innerHTML = currentQuiz.c
    fourth.innerHTML = currentQuiz.d
    curQuestion++;  

    } else {
        container.innerHTML = `You have finished the Quiz!<br> You got ${checkScore()}/5 answers correct! Congratulations!`
        container.classList.add('finished')
    }
    
}

function checkAnswers() {
    radios.forEach((radio) => {

        if(radio.checked) {

            let answer = radio.getAttribute('id');
            answers.push(answer);

        }

    })
}

function unCheck() {
    radios.forEach(radio=> {
        radio.checked = false
    })
}

function checkScore() {
    
    let rightAnswers = 0;

    for(let i = 0; i < 5; i++){
        let currentQuiz = quizData[i];

        if(answers[i] == currentQuiz.correct){
            rightAnswers += 1
        }
    }

    return rightAnswers
}

submitBtn.addEventListener('click',()=> {
    checkAnswers(); 
    loadQuiz();
    unCheck();
});


