let buttons = [
    {
        text: '7',
        value: 7,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '9',
        value: 9,
    },
    {
        text: '+',
        value: '+',
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '÷',
        value: '/',
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '−',
        value: '-',
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '.',
        value: '.',
    },
    {
        text: '×',
        value: '*',
    },

];
let stringExpression = '';
let accumulator = '';
//let accumOperations = [];
let calculator = document.getElementById('calculator');
let calcScreen = document.createElement('div');
let mainExpression = document.createElement('div');
let messages = document.createElement('div');
calcScreen.classList.add('screen-style');
mainExpression.classList.add('main-expression');
messages.classList.add('messages');
let clearButton = createButton('CE');
let equalButton = createButton('=');

clearButton.addEventListener('click', function () {
    stringExpression = '';
    updateDisplay();
    updateExpression(stringExpression);
});

equalButton.addEventListener('click', function () {
    updateExpression(stringExpression +'=');
    if(areThereErrors(stringExpression)){
        updateExpression('Invalid expression');
        stringExpression = '';
        updateDisplay();
    }else{
    stringExpression = '' + eval(stringExpression);
    updateDisplay();
    }
});

function createButton (text) {
    let button = document.createElement('button');
    button.textContent = text;
    return button;
}

calculator.appendChild(calcScreen);
calcScreen.appendChild(mainExpression);
calcScreen.appendChild(messages);

buttons.forEach(function(item) {
    let button = createButton(item.text);
    button.addEventListener('click', function () {
        if(stringExpression.length<6){
            stringExpression += '' + item.value;
            updateDisplay();
            updateExpression(stringExpression);
        }else{
            updateExpression('Limit exceeded')
        }
    });
    button.classList.add('single-button');
    calculator.appendChild(button);
});
calculator.appendChild(equalButton);
equalButton.classList.add('equal-button');
calculator.appendChild(clearButton);
clearButton.classList.add('clear-button');

function areThereErrors(string){
    try {
        if(eval(string)===Infinity){
            return true;
        }else{
            return false;
        }
    }catch (e){
        return true;
    }
}

function updateDisplay () {
    mainExpression.textContent = stringExpression.substring(0,8);
}

function updateExpression(expression) {
    messages.textContent = expression.substring(0,20);
}