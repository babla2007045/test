document.getElementById('checkButton').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(number)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    if (number < 2) {
        resultElement.textContent = `${number} is not a prime number.`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultElement.textContent = `${number} is a prime number.`;
    } else {
        resultElement.textContent = `${number} is not a prime number.`;
    }
});
