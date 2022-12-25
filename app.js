const inputs=document.querySelectorAll('.angle-input');

const output1=document.querySelector('#output');

const btn=document.querySelector('#submit-btn');

function calculateSum(angle1,angle2,angle3)
{
    const total=angle1+angle2+angle3;
    return total;
}
function isTriangle()
{
  const sum = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
  console.log(sum);
   if(sum === 180)
  {
    output1.innerText="Great It's a Triangle!!";
  }
  else
  {
    output1.innerText="Opps! It's not a Triangle!!";
  }
}

btn.addEventListener("click",isTriangle);