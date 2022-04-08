import React from 'react'
import Cloudy from './img/256px/Cloudy.png'
import Sun from './img/256px/Sun.png'
import PartlyCloudy from './img/256px/PartlyCloudy.png'
import fairweather from './img/256px/fairweather.png'
import Pressure_1 from './img/256px/Pressure_1.png'
import Sleet from './img/256px/Sleet.png'
import Storms from './img/256px/Storms.png'
import Pour from './img/256px/Pour.png'
import Snow from './img/256px/Snow.png'


const IconeWeather = ({ icon }) => {
    console.log(icon)

    if (icon === '01d') {
        return <img className='icon' src={Sun} alt="weather-icon" />
    }

    if (icon === '02d') {
        return <img className='icon' src={fairweather} alt="weather-icon" />
    }

    if (icon === '03d') {
        return <img className='icon' src={PartlyCloudy} alt="weather-icon" />
    }

    if (icon === '04d') {
        return <img className='icon' src={Cloudy} alt="weather-icon" />
    }

    if (icon === '09d') {
        return <img className='icon' src={Pressure_1} alt="weather-icon" />
    }

    if (icon === '10d') {
        return <img className='icon' src={Pour} alt="weather-icon" />
    }

    if (icon === '11d') {
        return <img className='icon' src={Storms} alt="weather-icon" />
    }

    if (icon === '13d') {
        return <img className='icon' src={Sleet} alt="weather-icon" />
    }

    if (icon === '50d') {
        return <img className='icon' src={Snow} alt="weather-icon" />
    }




}

export default IconeWeather