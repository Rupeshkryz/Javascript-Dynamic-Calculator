const defaultResult=0;
let currentResult=defaultResult;

function getUserinput(){
    return parseInt(userInput.value); 
}

function descOutput(operator,prevNum,currNum){
    const calcDescription=`${prevNum} ${operator} ${currNum}`;
    outputResult(currentResult,calcDescription);
}

function add(){
    const enteredNumber=getUserinput();
    const initialResult=currentResult 
    currentResult=currentResult + enteredNumber;
    descOutput('+',initialResult,enteredNumber);
}

function subtract(){
    const enteredNumber=getUserinput();
    const initialResult=currentResult 
    currentResult=currentResult - enteredNumber;
    descOutput('-',initialResult,enteredNumber);
}

function multiply(){
    const enteredNumber=getUserinput();
    const initialResult=currentResult 
    currentResult=currentResult * enteredNumber;
    descOutput('*',initialResult,enteredNumber);   
}

function divide(){
    const enteredNumber=getUserinput();
    const initialResult=currentResult 
    currentResult=currentResult / enteredNumber;
    descOutput('/',initialResult,enteredNumber);    
}



addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',divide)