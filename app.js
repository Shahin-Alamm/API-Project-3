

// function doSomething() {
//     fetch('http://www.boredapi.com/api/activity/')
//     .then(res => res.json())
//     .then(data => {
//        document.getElementById('activity').innerText = data.activity
//     })
// }
 
// doSomething()

// setInterval(() => {
//     doSomething()
// },3000);


// //Name api
// fetch('https://randomuser.me/api')
// .then (res => res.json())
// .then(data => {
// console.log(data);
// } )


const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}