
import React, { useState, useEffect } from 'react'
import "./style/Home.css"
import axios from "axios";

function Home() {

    const [weather, setWeather] = useState('');
    const loc = "Raigarh"

    const apiData = async () => {

        const apiKey = '8038140026a1b1109ca659c148a77f3d';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        console.log(res.data)
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name

        })
    }

    useEffect(() => {
        apiData()


    }, [])

    //Date
    let today = new Date();
    let mm = today.getMonth() + 1;
    let dd = today.getDate()
    let yy = today.getFullYear()


    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    let d = dd + "-" + mm + "-" + yy;

    //Time
    const [time, setTime] = useState();
    const updateTime = () => {
        const t = new Date().toLocaleTimeString();
        setTime(t);
    }
    setInterval(updateTime, 1000)

    //Converting K to C
    let K = weather.temp;
    let C = K - 273.15

    return (<>
        <div className="lnkkit">
            <a href="http://www.kitraigarh.com/index.aspx">visit : KIT Raigarh Official Website</a>
        </div>
        <div className="CTW">

            <div className="col">
                <p className="hhead">Date & Time</p>
                <p>{d}</p>
                <p>{time}</p>
            </div>



            <div className="col">
                <p className="hhead">{weather.city} Weather</p>
                <p> Weather : {weather.descp}</p>
                <p> Temperature : {C.toFixed(2)} &#8451;</p>
            </div>


            <div className="map">
                <p className="hhead">Map</p>
                <p className="mapp">  <iframe id="m" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.974782968456!2d83.4100488144498!3d21.85850836431081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2725853deab1e3%3A0x78780cc6afd58fd0!2sKIT%20Engineering%20College%20Raigarh!5e0!3m2!1sen!2sin!4v1609580057249!5m2!1sen!2sin" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" width="300px" /> </p>
            </div>


        </div >
    </>
    )
}




// <div className="Home">

//         <div className="homectw">
//         <CTW />
//         </div>

export default Home
