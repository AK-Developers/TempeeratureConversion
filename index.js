function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}
function toFahrenheit() {
    return (temp * 9) / 5 + 32;
}

// let temp = 32;
// console.log(`The temperature is ${temp}°C, which is ${toFahrenheit(temp)}°F.`);

const answer = document.getElementById("answer");
