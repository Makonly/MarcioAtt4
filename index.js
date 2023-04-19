const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = cityInput.value;
    const apiKey = '788e5d5ee840deee13892c48003ee99b'; // Substitua com sua chave de API do OpenWeatherMap

    // Faz a consulta à API do OpenWeatherMap
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    // Verifica se a consulta foi bem-sucedida
    if (response.ok) {
        // Exibe os resultados na página
        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Condição do tempo: ${data.weather[0].description}</p>
            <p>Temperatura: ${data.main.temp} &#8451;</p>
            <p>Umidade: ${data.main.humidity}%</p>
            <p>Velocidade do vento: ${data.wind.speed}
            <p>Pressão: ${data.main.pressure} hPa</p>
            `;
        } else {
            // Exibe uma mensagem de erro na página
            weatherResult.innerHTML = `<p>Não foi possível obter as informações do clima. Verifique o nome da cidade e tente novamente.</p>`;
        }
    });