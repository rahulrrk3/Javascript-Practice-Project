const form = document.querySelector('form');

form.addEventListener('submit',function (event1) {event1.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = parseInt(document.querySelector('#results').value);

    if (height === '' || height < 0 || isNaN(height) ) {
        results.innerHTML = 'Please Give Valid Input';}
    else if (weight === '' || weight < 0 || isNaN(weight) ) {
        results.innerHTML = 'Please Give Valid userinput';
        
    } 
    else {
        const result = (weight/(height*height/10000)).toFixed(2);
        results.innerHTML = `Your BMI = ${result}`;
    }

})