import './App.css';
import './styles/main.css'
import {useEffect, useRef, useState} from "react";
import macMinimize from './img/macminimize.png'
import { motion } from "framer-motion";
import uparrow from './img/Up arrow.png'


function App() {
    const yourapi = ''
    const inputref = useRef()
    const barContent = useRef()
    function changed(e){
        setWeatherData(prevState => ({
            ...prevState,
            search: e.target.value.toLocaleLowerCase().trim()
        }))
        console.log(weatherData.search)
    }
    const [weatherData, setWeatherData] = useState({
        data: null,
        isOpen: false,
        search: 'Istanbul',
        icon: '',
        description: null,
        cityName: 'Istanbul',
        temp: '',
        citiesPop: '',
        countryCode: 'TR',
        population: null,
        country: null,
        flag: null,
        feelsLike: null,
        maxTemp: null,
        minTemp: null,
        yourapi: 'writeyourapi'
    });
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.search}&appid=${weatherData.yourapi === 'writeyourapi' ? process.env.REACT_APP_API_KEY : weatherData.yourapi}&units=metric&lang=tr`;
    useEffect(() => {
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              if(data.base === 'stations'){
                  setWeatherData(prevState => ({
                      ...prevState,
                      data: data,
                      description: data.weather[0].description,
                      cityName: data.name.replace("Province", "").trim(),
                      temp: data.main.temp,
                      maxTemp:data.main.temp_max.toFixed(1),
                      feelsLike: data.main.feels_like.toFixed(1),
                      minTemp: data.main.temp_min.toFixed(1),
                      countryCode: data.sys.country,
                      population: data.population,
                      country: data.sys.country,
                      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                  }))
                  console.log(data)
              }else{
                  console.log('yanlış')
              }
            }
          );
  },[weatherData.search])
    useEffect(() => {
        fetch(`https://restcountries.com/v2/alpha/${weatherData.countryCode}`)
            .then(response => response.json())
            .then(data => {
                setWeatherData(prevState => ({
                    ...prevState,
                    country: data.name,
                    flag: data.flags.svg,
                    population: data.population
                }))

            })
            .catch(error => {
                console.log("Bir hata oluştu:", error);
            });
    },[weatherData.cityName])
    const barcontent = document.querySelector('.bar-content')
    const clicked = () => {
        barcontent.classList.toggle('gizlendi')
        setWeatherData(prevState => ({
            ...prevState,
            isOpen: !weatherData.isOpen
        }))
    }
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
  return (
    <div className="App">
        <div className={'main-content'}>
            <div className={'header-content'}>
                <img onClick={clicked} src={macMinimize} alt=""></img>
                <h1>Weather <span>App</span> <span>...//</span> <span>{weatherData.country}</span> <span>...//</span> <span>{weatherData.cityName}</span></h1>
                <h3>emrelutfi.com</h3>
            </div>
            {weatherData.isOpen ? <img id={'uparrow'} src={uparrow} alt=""></img> : <div></div>}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                ref={barContent} className={'bar-content'}>
                <motion.div
                    variants={item}
                    className={'input-bar'}>
                    <input ref={inputref} onChange={changed} placeholder={'Enter a City...'} type="text"></input>
                </motion.div>
                <motion.div
                    variants={item}
                    className={'bar-weather'}>
                    <div className={'weather-icon'}>
                        <img src={weatherData.icon ? weatherData.icon : 'asd'} alt=""></img>
                        <div className={'weather-alt'}>
                            <h1 id={'cityname'}>{weatherData.cityName ? weatherData.cityName : 'Loading'}</h1>
                            <div className={'weather-class-top'}><h3>{weatherData.description}</h3></div>
                            <div className={'weather-info'}>
                                <div className={'weather-class'}><h2>Sıcaklık: {weatherData.temp}</h2></div>
                                <div className={'weather-class-top'}><h2>Hissedilen Sıcaklık: {weatherData.feelsLike}</h2></div>
                                <div className={'weather-class'}><h2>Max Per Sıcaklık: {weatherData.maxTemp}</h2></div>
                                <div className={'weather-class-top'}><h2>Min Per Sıcaklık: {weatherData.minTemp}</h2></div></div>
                        </div>
                    </div>
                    <div className={'country-icon'}>
                        <img src={weatherData.flag} alt=""></img>
                        <h1>{weatherData.country ? weatherData.country : 'Loading'}</h1>
                        <h3>Nufus: {(weatherData.population / 1000000).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Milyon</h3>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </div>
  );
}

export default App;
