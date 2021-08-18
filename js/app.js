function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin()
    }
}


function generatepin() {

    const pin = getPin()
    document.getElementById('display-pin').value = pin
    console.log(pin)
}

document.getElementById('key-pad').addEventListener('click', function (event) {


    const number = event.target.innerText
    const calcInput = document.getElementById('typed-Numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
        else if (number == '<') {
            calcInput.value = calcInput.value.slice(0, - 1);
        }
    } else {

        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }

})

document.getElementById('submit').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value
    const typedNumber = document.getElementById('typed-Numbers').value
    const success = document.getElementById('nofity-success')
    const failError = document.getElementById('notify-fail')
    let attempts = 0;

    if (pin == typedNumber) {
        success.style.display = 'block'
        failError.style.display = 'none'
    } else {
        for (i = 3; i > 0; i--) {
            attempts = i;
            if (attempts > 0) {
                const count = document.getElementById('try-count')
                const countText = count.innerText
                const countValue = parseInt(countText)
                if (countValue > 0) {
                    count.innerText = countValue - 1
                    failError.style.display = 'block'
                    success.style.display = 'none'
                    break;
                }
             else {
                    const button = document.getElementById('submit')
                    button.disabled = true
                    button.style.backgroundColor = "#425062"
                }
            }
            else {

            }
        }
    }

})





