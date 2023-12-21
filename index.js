function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

function toFahrenheit(temp) {
    return (temp * 9) / 5 + 32;
}

const answer = document.getElementById("answer");

document.getElementById("convertBtn").onclick = () => {
    const temperature = Number(document.getElementById("temperature").value);

    if (document.getElementById("celcius").checked) {
        let ans = toCelsius(temperature);
        answer.innerHTML = `<b>${temperature}°F = ${ans}°C</b>`;
    } else if (document.getElementById("fahrenheit").checked) {
        let ans = toFahrenheit(temperature);
        answer.innerHTML = `<b>${temperature}°C = ${ans}°F</b>`;
    }
};
