const number1 = document.querySelector('.number-0');
const number2 = document.querySelector('.number-1');
const number3 = document.querySelector('.number-2');
const number4 = document.querySelector('.number-3');
const number5 = document.querySelector('.number-4');
const number6 = document.querySelector('.number-5');
const number7 = document.querySelector('.number-6');
const number8 = document.querySelector('.number-7');
const number9 = document.querySelector('.number-8');
const number0 = document.querySelector('.number-9');
const numbersButton = document.querySelectorAll('.number')
const divisionButton = document.querySelector('.division');
const multiplyButton = document.querySelector('.multiply');
const subtractionButton = document.querySelector('.subtraction');
const additionButton = document.querySelector('.addition');
const equalButton = document.querySelector('.equal');
const operationButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal');
const allClearButton = document.querySelector('.ac');
const mpButton = document.querySelector('.mp');
const modulusButton = document.querySelector('.modulus');
const previousOperandTextElement = document.querySelector('.previous');
const currentOperandTextElement = document.querySelector('.current');
const numbersArr = [number1,number2,number3,number4,number5,number6,number7,number8,number9,number0]
let haveDot = false;



allClearButton.addEventListener('click', function(e){
  previousOperandTextElement.textContent = '';
  currentOperandTextElement.textContent = '0';
  haveDot = false;
  
})

numbersButton.forEach(number =>{
  number.addEventListener('click', (e)=>{
    if(currentOperandTextElement.textContent == '0'){
      currentOperandTextElement.textContent = '';
    }

    if(e.target.innerText == '.' && !haveDot){
      haveDot = true;
    } else if(e.target.innerText == '.' && haveDot){
      return;
    }
    currentOperandTextElement.textContent += e.target.innerText.toString();
    })
})


operationButtons.forEach(oper =>{
  oper.addEventListener('click', (e)=>{
    previousOperandTextElement.textContent = currentOperandTextElement.textContent;
    currentOperandTextElement.textContent = '';
    haveDot = false;
    /* const task = e.target;
    task.style.backgroundColor = 'white';
    task.style.color = 'rgb(189, 141, 52)'; */
    
  })
})

equalButton.addEventListener('click', function(){

})


function mathFunction(){
    
    const prev = Number(previousOperandTextElement.textContent)
    const current = Number(currentOperandTextElement.textContent)
     switch(operationButtons.innerHTML){
      case '+': 
        return result = prev + current
      break;
      case '/':
        return result = prev / current
      break;
      case 'x':
        return result = prev * current
      break;
      case '-':
        return result = prev - current
      break;
      default:
        return
    } 
    /* currentOperandTextElement.textContent = result;
    previousOperandTextElement.textContent = ''; */
    
}

equalButton.addEventListener('click', (e)=> {
      let result = 0;
      mathFunction();
      currentOperandTextElement.textContent = result;
      previousOperandTextElement.textContent = '';
      
})