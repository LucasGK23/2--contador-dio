var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click",increment);
document.getElementById("subtrair").addEventListener("click",decrement);

function increment() {

    if(currentNumber < 20)
    {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        currentNumber = currentNumber;
    }

    if(currentNumber < -1)
    {
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {

    if(currentNumber > -10)
    {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        currentNumber = currentNumber;
    }

    if(currentNumber < 0)
    {
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color = 'black';
    }
}