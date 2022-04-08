import { useState, useEffect } from 'react';
import './App.css';
// Import Icons
import { WiThermometer, WiNightCloudyGusts, WiRaindrop, WiTsunami } from "react-icons/wi";
import { FaSearchLocation, FaLocationArrow, FaRegSadTear } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import IconeWeather from './IconeWeather';

function App() {

  // weather API  
  const api = {
    key: "c1d2d0646bc54f6bc3987793f8c87d2d",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  // Initial State
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // Change input value 
  const handelChange = (e) => {
    setQuery(e.target.value)
  }

  // Import Data from API 
  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      });
  };

  // Submit Function
  const handelSubmit = () => {
    search();
  }

  // Change Dark/Light Mode 
  const changeMode = () => {
    setDark(!dark)
  }

  // Submit with enter press 
  const submitWithEnter = (eve) => {
    if (eve.key === "Enter") {
      search();
    }
  }

  useEffect(() => {
    search();
  }, [])
  console.log(weather)

  return (
    <div className={dark ? 'dark' : 'light'}>
      <section className="" >
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className=" bg-images">
                <input type='text' placeholder='Search....'
                  onChange={handelChange}
                  onKeyPress={submitWithEnter}

                />
                <p className='send' onClick={handelSubmit}><FaSearchLocation size={20} color={'#fff'} /></p>
                <button className='icon-toogle' onClick={changeMode}>
                  {
                    dark ? <FiMoon size={30} color={'#fff'} /> : <FiSun size={30} color={'#fff'} />
                  }
                </button>

                <div className=" p-5">
                  {(typeof weather.main != "undefined") ? (
                    <div>
                      <h4 className=" country">{weather.name}, {weather.sys.country}</h4>
                      <div className='row'>
                        <div className='col-6'>
                          <p className="display-2 temp">{Math.round(weather.main.temp)}°C</p>
                          <h4 className='weathr-main'>{weather.weather[0].main}</h4>
                        </div>
                        <div className='col-6'>
                          <IconeWeather icon={weather.weather[0].icon} />

                        </div>
                      </div>
                      <h6 className='description'>{weather.weather[0].description}</h6>
                      <p className="info"> <WiRaindrop size={35} color={'#fff'} /><span>Humidity: <strong>{Math.round(weather.main.humidity)} %</strong></span></p>
                      <p className="info"> <WiThermometer size={35} color={'#fff'} /> <span>Atmospheric pressure: <strong>{Math.round(weather.main.pressure)} </strong></span></p>
                      <p className="info"><WiNightCloudyGusts size={35} color={'#fff'} /> <span>Wind speed:  <strong>{Math.round(weather.wind.speed)} meter/sec</strong></span></p>
                      <p className="info"><WiTsunami size={35} color={'#fff'} /><span>Wind direction    <strong>{Math.round(weather.wind.deg)} degrees</strong></span></p>
                    </div>
                  ) : (
                    <div>
                      {(weather.cod === '404') ?
                        <div className='alert_N'>
                          <span className='image-not text-center'><FaRegSadTear size={90} /></span>
                          <h1 className='alert_'>Not Found</h1>
                        </div>
                        :
                        <div className='alert_N'>
                          <span className='image-not text-center'><FaLocationArrow size={90} /></span>
                          <h1 className='alert_'>Enter a valid country/city name </h1>
                        </div>
                      }
                    </div>
                  )}

                </div>
                <div>

                </div>

              </div>
              <h4 className='copyright'>Copyright 2022 | create by: Majd Salameh</h4>
            </div>

          </div>
        </div>
      </section >
    </div >
  );
}

export default App;
