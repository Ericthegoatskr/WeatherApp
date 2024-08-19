async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c78dd20685b312a1af9282c7c5dee61d';  // 替換成你從OpenWeatherMap獲得的API鑰匙
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.weather) {
            document.getElementById('weatherResult').innerHTML = `
                <h2>${city}</h2>
                <p>溫度: ${data.main.temp}°C</p>
                <p>天氣狀況: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>無法獲取天氣資料，請確認城市名稱正確。</p>`;
        }
    } catch (error) {
        console.error('天氣查詢出錯', error);
        document.getElementById('weatherResult').innerHTML = `<p>查詢過程中發生錯誤。</p>`;
    }
}
