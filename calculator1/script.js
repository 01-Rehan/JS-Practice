let calculation = '';

function updateValue(value){
    calculation += value;
    displayvalue();
}


function displayvalue(){
    document.querySelector('.display-sec').innerHTML = calculation;
}
function total(){
    document.querySelector('.display-sec').innerHTML = eval(calculation);
}