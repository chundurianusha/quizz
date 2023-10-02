 const questions=[
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            {text:"Script",correct:false},
            {text:"Style",correct:true},
            {text:"Paragraph",correct:false},
            {text:"head",correct:false},

        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers:[
            {text:"background-color",correct:true},
            {text:"font-color",correct:false},
            {text:"color",correct:false},
            {text:"fill",correct:false},

        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers:[
            {text:"style",correct:false},
            {text:"script",correct:true},
            {text:"head",correct:false},
            {text:"body",correct:false},

        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers:[
            {text:"body",correct:false},
            {text:"head",correct:false},
            {text:"1 or 2",correct:true},
            {text:"none",correct:false},

        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers:[
            {text:"div",correct:false},
            {text:"break",correct:false},
            {text:"br",correct:true},
            {text:"span",correct:false},

        ]
    }
];

const questionElement=document.getElementById("question");
const Answer=document.getElementById("answer");
const nextBUTTON =document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
let timeleft=document.querySelector(".time-left");
let restart=document.getElementById("restart");

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBUTTON.innerHTML="NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        Answer.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);;
    });
}

function resetState(){
    nextBUTTON.style.display="none";
    while(Answer.firstChild){
        Answer.removeChild(Answer.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(Answer.children).forEach(button =>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBUTTON.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML='your score ' + score + ' out of ' + questions.length;
    nextBUTTON.innerHTML="play Again";
    nextBUTTON.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextBUTTON.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
