const input1=document.querySelector('.inputa');

const input2=document.querySelector('.inputb');

const output3 = document.querySelector('#output');

const btn=document.querySelector('#submit-btn');

function sumAdd(a,b)
{
    const c=a*a+b*b;
    return Math.sqrt(c);
}

function calculateHypotenuse()
{
    const sum=sumAdd(Number(input1.value),Number(input2.value));
    output3.innerText=sum;
}
btn.addEventListener("click",calculateHypotenuse);