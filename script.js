let BMI=document.getElementById("BMI")
let height=document.getElementById("height")
let weight=document.getElementById("weight");
let btn=document.getElementById("calculate");
let category=document.getElementById("category")

btn.addEventListener('click',()=>{
    let heightValue=Number(height.value);
    let weightValue=Number(weight.value);
    heightValue=heightValue*heightValue;
    let BMIValue=(weightValue/heightValue);
    BMIValue= BMIValue.toFixed(2);
    BMI.textContent=BMIValue
    if(BMIValue<18.5)
    {
      category.innerText="Underweight 😩"
      category.style.color="Blue"
      BMI.style.color="Blue"
    }
   else if(BMIValue>=18.5&&BMIValue<=24.9)
        {
          category.innerText="Healthy Range 💪"
          category.style.color="Green"
          BMI.style.color="Green"
        }
    else  if(BMIValue>=25.0&&BMIValue<=29.9)
            {
              category.innerText="Overweight 🙍"
              category.style.color="Yellow"
              BMI.style.color="Yellow"
            }
     else  if(BMIValue>=30&&BMIValue<=39.9)
                {
                  category.innerText="Obesity 🫄"
                  category.style.color="Orange"
                  BMI.style.color="Orange"
                }
    else{
        category.innerText="Severe Obesity ☠️"
        category.style.color="Red"
        BMI.style.color="Red"
    }
})