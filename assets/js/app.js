const LATITUDE = '-15.9564';
const LONGITUDE = '-48.0628';
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,weather_code`;

function getWeatherDescription(code) {
    if (code === 0) return 'Céu Limpo';
    if ([1, 2, 3].includes(code)) return 'Parcialmente Nublado';
    if ([45, 48].includes(code)) return 'Névoa';
    if ([51, 53, 55, 61, 63, 65].includes(code)) return 'Chuva / Chuvisco';
    if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Neve';
    if ([95, 96, 99].includes(code)) return 'Tempestade';
    return 'Desconhecido';
}

async function fetchWeatherData() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Falha na comunicação com a API');
    }
    return await response.json();
}

function updateUI(data) {
    document.getElementById('temperature').innerText = Math.round(data.current.temperature_2m);
    document.getElementById('humidity').innerText = `${data.current.relative_humidity_2m}%`;
    document.getElementById('condition').innerText = getWeatherDescription(data.current.weather_code);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('weather-content').style.display = 'block';
}

function handleFetchError() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'block';
}

// Inicializa a aplicação se estiver rodando no navegador
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        fetchWeatherData()
            .then(updateUI)
            .catch(handleFetchError);
    });
}

// Exporta as funções para que o arquivo de teste consiga importá-las (Node.js/Jest environment)
if (typeof module !== 'undefined') {
    module.exports = { fetchWeatherData, getWeatherDescription, API_URL };
}