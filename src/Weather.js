import React from 'react'
import { useState } from 'react'
import "./style/Weather.css"
import axios from 'axios'


function Weather() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [err, setErr] = useState('');
    const apiKey = '8038140026a1b1109ca659c148a77f3d';

    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        if (!loc) return setErr("Error : Please enter city name"), setWeather(null)

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        console.log(res.data)
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
        })

        setCity(res.data.name)
        setErr(null)
    }
    //Converting K to C
    let k = weather.temp;
    let C = k - 273.15



    const Weath = () => {
        return <div>
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Temperature : {C.toFixed(2)} &#8451;
                </div>
                <div className="welement">
                    Humidity :{weather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {weather.press} mb
                </div>
            </div>
        </div>
    }
    return (<>
        <div className="weathhead">Weather Info</div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <input type="text" placeholder="city" name="loc" />
                    <button className="bttn">Search</button>
                </form>

                {weather && <Weath />}
                <p>{err}</p>
            </div>
        </div>
    </>
    )
}

export default Weather
