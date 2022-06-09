const api = {
	key: '57fbb180782b3cfd86e922345602f9bc',
	base: 'https://api.openweathermap.org/data/2.5/weather?',
};

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');
const date = document.querySelector('.date');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const weather = document.querySelector('.weather');
const tempRange = document.querySelector('.temp-range');

const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const m = new Date();
let month = monthNames[m.getMonth()];

const d = new Date();
let day = weekdays[d.getDay()];

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let yyyy = today.getFullYear();

let timelog = `${day}, ${dd} ${month} ${yyyy}`;

function update() {
	date.innerHTML = timelog;
}
update();

btn.addEventListener('click', getInput);

function getInput(e) {
	e.preventDefault();

	getData(search.value);
}

function getData() {
	fetch(`${api.base}q=${search.value}&units=metric&appid=${api.key}`)
		.then((response) => {
			return response.json();
		})
		.then(displayData);
}

function displayData(response) {
	if (response.cod == 404 || response.cod == 400) {
		error.innerHTML = 'Enter a valid city name, please.';
	} else {
		error.innerHTML = '';
	}

	const tempValue = response.main.temp;
	const cityName = response.name;
	const countryName = response.sys.country;
	const weatherStatus = response.weather[0].description;
	const tempHigh = response.main.temp_max;
	const tempMin = response.main.temp_min;

	const weatherStatusArray = weatherStatus.split(' ');

	for (let i = 0; i < weatherStatusArray.length; i++) {
		weatherStatusArray[i] =
			weatherStatusArray[i][0].toUpperCase() +
			weatherStatusArray[i].substr(1);
	}

	temp.innerHTML = `Temp: ${String(tempValue).slice(0, -1)} <span>°C</span>`;
	city.innerHTML = `${cityName}, ${countryName}`;
	weather.innerHTML = `Weather: ${weatherStatusArray.join(' ')}`;
	tempRange.innerHTML = `Temp Range: 
        ${String(tempHigh).slice(0, -1)} °C / 
        ${String(tempMin).slice(0, -1)} °C`;

	console.log(response);
}
