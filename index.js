function checkOperator(operator) {
    let display = document.getElementById('text-input');
    let currentValue = display.value;
    
    if (currentValue === '' && operator === '/'){
        display.value = '0/';
        return;
    }else if (currentValue === '' && operator === '*'){
        display.value = '0*';
        return;
    }
    if (/[\+\-\*\/]$/.test(currentValue)) {      
        display.value = currentValue.slice(0, -1) + operator;
    } else {  
        display.value += operator;
    }
}
function checkDot(dot) {
    let display = document.getElementById('text-input');
    let currentValue = display.value;

    if (/[.]$/.test(currentValue)) {      
        display.value = currentValue.slice(0, -1) + dot;
    } else {  
        display.value += dot;
    }

}

