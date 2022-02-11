const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');


const numRoundUp = (num)=>{
    return Math.round(num * 100) / 100;
}
const celsiusConverter = ()=>{
    const celVal = parseFloat(celsius.value)
    const cel = celVal * 9/5 + 32;
    fahrenheit.value = numRoundUp(cel)
}

const fahrenheitConverter = ()=>{
    const fahVal = parseFloat(fahrenheit.value)
    const fah = (fahVal - 32) * 5/9;
    celsius.value = numRoundUp(fah);
} 

celsius.addEventListener('input', celsiusConverter);
fahrenheit.addEventListener('input', fahrenheitConverter);