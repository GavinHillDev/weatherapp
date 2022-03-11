let button = document.getElementById('submit')
let form = document.getElementById('field')
let coor = document.getElementById('weather')
let citi = document.getElementById('city')
let temp = document.getElementById('tempature')
let far = document.getElementById('f')
let img = document.getElementById('giph')
let cel = document.getElementById('c')
let mon = document.getElementById('mon')
let tue = document.getElementById('tue')
let wed = document.getElementById('wed')
let thur = document.getElementById('thur')
let fri = document.getElementById('fri')
let sat = document.getElementById('sat')
let sun = document.getElementById('sun')
let monwe = document.getElementById('moning').src
let tuewe = document.getElementById('tueing').src
let wedne = document.getElementById('weding').src
let thurwe = document.getElementById('thuring').src
let friwe = document.getElementById('friing').src
let satwe = document.getElementById('sating').src
let sunwe = document.getElementById('suning').src

let daym = document.getElementById('daym')
let dayt = document.getElementById('dayt')
let dayw = document.getElementById('dayw')
let dayth = document.getElementById('dayth')
let dayf = document.getElementById('dayf')
let daysa = document.getElementById('daysa')
let daysu = document.getElementById('daysu')
function dayChecker() {
    const d = new Date();
    let day = d.getDay();
    console.log(day)
    switch (day) {
        case 1:
            console.log("Monday")
            daym.style.color = "yellow"
            break;
        case 2:
            console.log("Tuesday")
            dayt.style.color = "yellow"
            break;
        case 3:
            console.log("Wednesday")
            dayw.style.color = "yellow"
            break;
        case 4:
            console.log("Thursday")
            dayth.style.color = "yellow"
            break;
        case 5:
            console.log("Friday")
            dayf.style.color = "yellow"
            break;
        case 6:
            console.log("Saturday")
            daysa.style.color = "yellow"
            break;
        case 7:
            console.log("Sunday")
            daysu.style.color = "yellow"
            break;
    }

}
dayChecker()
async function initialSite() {
    let site = await
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Georgia&appid=7df1cef7eb1d1b6656ac681f899e4a4f')
    const data = await site.json()
    console.log(data)
    city.innerText = data.name
    coor.innerText = data.weather[0].main
    temp.innerText = Math.round((data.main.temp - 273.15) * 1.8 + 32) + " F"
    far.addEventListener('click', function changeF() {
        const k = data.main.temp
        const f = Math.round((k - 273.15) * 1.8 + 32)
        temp.innerText = f + ' F'
        console.log(k)
    })
    cel.addEventListener('click', function changeF() {
        const k = data.main.temp
        const c = Math.round((k - 273.15))
        temp.innerText = c + ' C'
    })
}
initialSite()
async function initalSiteExtended() {
    let forecast = await
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=32.7504&lon=-83.5002&exclude={hourly,minutely}&appid=7df1cef7eb1d1b6656ac681f899e4a4f')
    const fore = await forecast.json()
    //Days
    console.log(fore)
    let mond = (fore.daily[0].temp.max - 273.15) * 1.8 + 32
    let tues = (fore.daily[1].temp.max - 273.15) * 1.8 + 32
    let wedn = (fore.daily[2].temp.max - 273.15) * 1.8 + 32
    let thurs = (fore.daily[3].temp.max - 273.15) * 1.8 + 32
    let frid = (fore.daily[4].temp.max - 273.15) * 1.8 + 32
    let satu = (fore.daily[5].temp.max - 273.15) * 1.8 + 32
    let sund = (fore.daily[6].temp.max - 273.15) * 1.8 + 32
    mon.innerText = Math.round(mond) + " F"
    tue.innerText = Math.round(tues) + " F"
    wed.innerText = Math.round(wedn) + " F"
    thur.innerText = Math.round(thurs) + " F"
    fri.innerText = Math.round(frid) + " F"
    sat.innerText = Math.round(satu) + " F"
    sun.innerText = Math.round(sund) + " F"
    // Weather TIme
    let monweather = fore.daily[0].weather[0].main
    let tueweather = fore.daily[1].weather[0].main
    let wedweather = fore.daily[2].weather[0].main
    let thurweather = fore.daily[3].weather[0].main
    let friweather = fore.daily[4].weather[0].main
    let satweather = fore.daily[5].weather[0].main
    let sunweather = fore.daily[6].weather[0].main
    console.log()
    weatherDeterm(monweather, tueweather, wedweather, thurweather, friweather, satweather, sunweather)
    far.addEventListener('click', function changeF() {
        let mond = (fore.daily[0].temp.max - 273.15) * 1.8 + 32
        let tues = (fore.daily[1].temp.max - 273.15) * 1.8 + 32
        let wedn = (fore.daily[2].temp.max - 273.15) * 1.8 + 32
        let thurs = (fore.daily[3].temp.max - 273.15) * 1.8 + 32
        let frid = (fore.daily[4].temp.max - 273.15) * 1.8 + 32
        let satu = (fore.daily[5].temp.max - 273.15) * 1.8 + 32
        let sund = (fore.daily[6].temp.max - 273.15) * 1.8 + 32
        mon.innerText = Math.round(mond) + " F"
        tue.innerText = Math.round(tues) + " F"
        wed.innerText = Math.round(wedn) + " F"
        thur.innerText = Math.round(thurs) + " F"
        fri.innerText = Math.round(frid) + " F"
        sat.innerText = Math.round(satu) + " F"
        sun.innerText = Math.round(sund) + " F"
    })
    cel.addEventListener('click', function changeF() {
        let mond = (fore.daily[0].temp.max - 273.15)
        let tues = (fore.daily[1].temp.max - 273.15)
        let wedn = (fore.daily[2].temp.max - 273.15)
        let thurs = (fore.daily[3].temp.max - 273.15)
        let frid = (fore.daily[4].temp.max - 273.15)
        let satu = (fore.daily[5].temp.max - 273.15)
        let sund = (fore.daily[6].temp.max - 273.15)
        mon.innerText = Math.round(mond) + " C"
        tue.innerText = Math.round(tues) + " C"
        wed.innerText = Math.round(wedn) + " C"
        thur.innerText = Math.round(thurs) + " C"
        fri.innerText = Math.round(frid) + " C"
        sat.innerText = Math.round(satu) + " C"
        sun.innerText = Math.round(sund) + " C"
    })
}
initalSiteExtended()
button.addEventListener('click', async function getWeather() {
    let site = await
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + form.value + '&appid=7df1cef7eb1d1b6656ac681f899e4a4f')
    const data = await site.json()
    console.log(data)
    city.innerText = data.name
    coor.innerText = data.weather[0].main
    temp.innerText = Math.round((data.main.temp - 273.15) * 1.8 + 32) + " F"
    form.value = '';
    let la = data.coord.lat
    let lo = data.coord.lon
    far.addEventListener('click', function changeF() {
        const k = data.main.temp
        const f = Math.round((k - 273.15) * 1.8 + 32)
        temp.innerText = f + ' F'
    })
    cel.addEventListener('click', function changeF() {
        const k = data.main.temp
        const c = Math.round((k - 273.15))
        temp.innerText = c + ' C'
    })
    //See if i can fit into a different func
    weatherForecast(lo, la)

})
async function weatherForecast(lo, la) {
    let forecast = await
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + la + '&lon=' + lo + '&exclude={hourly,minutely}&appid=7df1cef7eb1d1b6656ac681f899e4a4f')
    const fore = await forecast.json()
    //Days
    console.log(fore)
    let mond = (fore.daily[0].temp.max - 273.15) * 1.8 + 32
    let tues = (fore.daily[1].temp.max - 273.15) * 1.8 + 32
    let wedn = (fore.daily[2].temp.max - 273.15) * 1.8 + 32
    let thurs = (fore.daily[3].temp.max - 273.15) * 1.8 + 32
    let frid = (fore.daily[4].temp.max - 273.15) * 1.8 + 32
    let satu = (fore.daily[5].temp.max - 273.15) * 1.8 + 32
    let sund = (fore.daily[6].temp.max - 273.15) * 1.8 + 32
    mon.innerText = Math.round(mond) + " F"
    tue.innerText = Math.round(tues) + " F"
    wed.innerText = Math.round(wedn) + " F"
    thur.innerText = Math.round(thurs) + " F"
    fri.innerText = Math.round(frid) + " F"
    sat.innerText = Math.round(satu) + " F"
    sun.innerText = Math.round(sund) + " F"
    // Weather TIme
    let monweather = fore.daily[0].weather[0].main
    let tueweather = fore.daily[1].weather[0].main
    let wedweather = fore.daily[2].weather[0].main
    let thurweather = fore.daily[3].weather[0].main
    let friweather = fore.daily[4].weather[0].main
    let satweather = fore.daily[5].weather[0].main
    let sunweather = fore.daily[6].weather[0].main
    console.log()
    weatherDeterm(monweather, tueweather, wedweather, thurweather, friweather, satweather, sunweather)
}
async function weatherDeterm(monweather, tueweather, wedweather, thurweather, friweather, satweather, sunweather) {
    document.getElementById('moning').src = '';
    document.getElementById('tueing').src = '';
    document.getElementById('weding').src = '';
    document.getElementById('thuring').src = '';
    document.getElementById('friing').src = '';
    document.getElementById('sating').src = '';
    document.getElementById('suning').src = '';
    switch (monweather) {
        case "Clouds":
            document.getElementById('moning').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('moning').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('moning').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('moning').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('moning').src = 'images/sun.png'
    }
    //Tuesday
    switch (tueweather) {
        case "Clouds":
            document.getElementById('tueing').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('tueing').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('tueing').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('tueing').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('tueing').src = 'images/sun.png'
    }

    //Wednesday
    switch (wedweather) {
        case "Clouds":
            document.getElementById('weding').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('weding').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('weding').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('weding').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('weding').src = 'images/sun.png'
    }
    //Thursday
    switch (thurweather) {
        case "Clouds":
            document.getElementById('thuring').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('thuring').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('thuring').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('thuring').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('thuring').src = 'images/sun.png'
    }

    //Friday
    switch (friweather) {
        case "Clouds":
            document.getElementById('friing').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('friing').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('friing').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('friing').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('friing').src = 'images/sun.png'
    }
    //Saturday
    switch (satweather) {
        case "Clouds":
            document.getElementById('sating').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('sating').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('sating').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('sating').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('sating').src = 'images/sun.png'
    }
    //Sunday
    switch (sunweather) {
        case "Clouds":
            document.getElementById('suning').src = 'images/clouds.png'
            break;
        case "Rain":
            document.getElementById('suning').src = 'images/rain.png'
            break;
        case "Snow":
            document.getElementById('suning').src = 'images/snow.png'
            break;
        case "Thunderstorm":
            document.getElementById('suning').src = 'images/thunder.png'
            break;
        case "Clear":
            document.getElementById('suning').src = 'images/sun.png'
    }
}
