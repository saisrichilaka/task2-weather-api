var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descriptionElem = document.querySelector('#description'); // Changed variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "86754b2092d33d8c5d032a491e820c09";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var weatherDescrip = data['weather'][0]['description']; // Changed variable name
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature : <span>${conversion(temperature)} C</span>`;
            descriptionElem.innerHTML = `Sky Conditions : <span>${weatherDescrip}</span>`; // Changed variable name
            wind.innerHTML = `Wind Speed : <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
