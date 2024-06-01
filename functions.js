let currentInput = "";
let currentOperator = "N";
let result = ''
let can = true;
const Screen = document.getElementById('Screen')

function mode(){
    let buttons = document.querySelectorAll("#btn");

    // Light-Mode
    if (document.body.style.backgroundColor === 'black'){
        document.querySelector('.Calculator').style.backgroundColor="rgb(148, 161, 213)";
        document.body.style.backgroundColor = 'white';
        document.getElementById('header').style.color="black";
        document.getElementById('Screen').style.backgroundColor="#cacaca";
        document.getElementById('Screen').style.color="black";
        
        buttons.forEach(button => {
            button.style.backgroundColor = '#222327e9'
            button.style.color = 'white'});
            
        document.getElementById('btn').style.backgroundColor= "#9fa6bae9";
        document.getElementById('btn').style.color="black";
            
            // Dark-Mode
        } else{
            document.querySelector('.Calculator').style.backgroundColor="rgb(63, 69, 92)";
            document.body.style.backgroundColor = 'black';
            document.getElementById('header').style.color="white";
            document.getElementById('Screen').style.backgroundColor="#333";
            document.getElementById('Screen').style.color="white";
            
            
            buttons.forEach(button => {
                button.style.backgroundColor = '#d7d8dbe9'
                button.style.color = 'black'});
                
                document.getElementById('btn').style.backgroundColor= "#9fa6bae9";
                document.getElementById('btn').style.color="white";
            }
}
      
function appendNumber(x){
    if (result != ''){
        currentInput = ''
        result = ''
    }
    currentInput += x;
    currentOperator = '';
    Screen.value = currentInput;
}
        
function negation(){
    if (can === true){
        currentInput *= -1;
        Screen.value = currentInput;
    } 
}

function ClearInput(){
    currentInput = '';
    Screen.value = '';
}

function erase(){
    currentInput = currentInput.slice(0,-1)
    document.getElementById('Screen').value = currentInput;
}

function multiply(){
    if (currentOperator != ''){
        currentInput = currentInput.slice(0,-1)
    } if(currentInput != '') {
        currentOperator = '*';
        currentInput += 'x';
        can = false
    }
    document.getElementById('Screen').value = currentInput;
    result = ''

}

function subtract(){
    if (currentOperator != ''){
        currentInput = currentInput.slice(0,-1)
    } if(currentInput != '') {
        currentOperator = '-';
        currentInput += currentOperator;
        can = false
    }
    document.getElementById('Screen').value = currentInput;
    result = ''
}

function add(){
    if (currentOperator != ''){
        currentInput = currentInput.slice(0,-1)
    } if(currentInput != '') {
        currentOperator = '+';
        currentInput += currentOperator;
        can = false
    }
    document.getElementById('Screen').value = currentInput;
    result = ''
}

function divide(){
    if (currentOperator != ''){
        currentInput = currentInput.slice(0,-1)
    } if(currentInput != '') { 
        currentOperator = '/';  
        currentInput += '÷';
        can = false
    }
    document.getElementById('Screen').value = currentInput;
    result = ''
}

function decimal() {
    if (currentOperator !== '.' && (currentInput === '' || !currentInput.endsWith('.'))) {
        currentOperator = '.';
        currentInput += currentOperator;
        document.getElementById('Screen').value = currentInput;
        result = '';
    }
}

function equal(){
    if (currentInput != '' && currentOperator === ''){
        currentInput = currentInput.replace(/\b0+/g, '');

        currentInput = currentInput.replaceAll(/÷/g, '/');
        currentInput = currentInput.replaceAll(/x/g, '*');
        result = eval(currentInput);
        result = Number(result.toFixed(10));
        
        can=true
        currentOperator = '';
        document.getElementById('Screen').value = result;
        currentInput = String(result);
    } 
}