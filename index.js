const textbox = document.getElementById("textbox");
const Farenheit = document.getElementById("Farenheit");
const Celcius = document.getElementById("Celcius");
const results = document.getElementById("results");

let temp;

function convert(){
    if(Farenheit.checked){
        temp = Number(textbox.value);
        temp = temp  * 9 / 5 + 32;
        results.textContent = temp.toFixed(1) + "°F";
    }
    else if(Celcius.checked){
        temp = Number(textbox.value);
        temp = (temp-32)  * (5 / 9);
        results.textContent = temp.toFixed(1) + "°C";
    }
    else{
        results.textContent = "Select a Unit"
    }
}