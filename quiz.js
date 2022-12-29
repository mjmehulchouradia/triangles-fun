const quizForm=document.querySelector('.quiz-form');

const btn=document.querySelector('#submit-btn');

const output2=document.querySelector('#output');

const correctAns=["80","Right","5,8,12","10cm2"];

function quizResult()
{
    let score=0;
    let index=0;

    const formResults = new FormData(quizForm);
    for(let value of formResults.values())
    {
        if(value === correctAns[index++] )
        {
            score++;
        }
    }

    output2.innerText='Your Score is '+score;
}

btn.addEventListener("click",quizResult);