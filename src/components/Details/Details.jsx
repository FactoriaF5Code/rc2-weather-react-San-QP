import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { getUserLocation } from "../../geolocation";
// import Icons from '../Icons';
import './Details.css';
import '../Home/Home.css';
import '../Panel/Panel.css';

export const Details = () => {
  const [search, setSearch] = useState("");
  const [weatherValues, setWeatherValues] = useState("");
  const [icon, setIcon] = useState("");

  const currentDate = new Date();
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()]
        
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&lang=es&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
    
  const getData = async () => {
      await fetch(URL)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          if (data.cod >= 400) {
              setWeatherValues(false);
          } else {
              setIcon(data.list[0].weather[0].main);
              setWeatherValues(data);
          }
      })
      .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
      });
  };
    
    
  useEffect(() => {
      getUserLocation()
          .then((city) => {
              setSearch(city);
          })
          .catch((error) => {
          console.error('Error al obtener la ubicación:', error);
          });
      },        
      []);
      
  useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [search]); 
  
  return (
    <main className='home'>
      <Header />
      <main className="mainContent">
        <section className="columnMosaic">
            <img src="/public/mosaic/mosaic2-left.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic3-left.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic4-left.svg" alt="mosaic decoration" className="mosaic"/>
        </section>
        <section className="panel">
          {weatherValues ? (
            <>   
              <ul className="locationDate">
                <li className="location">
                    <div className="circle">
                        <span className="material-symbols-sharp">location_on</span>
                    </div>
                <h2 className="cityName">{weatherValues.city.name}</h2>
                </li>
                <li className="date">
                    {`${currentDayOfWeek}, ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`}
                </li>
              </ul>
              <div className='moreDetails'>
                <div className='weatherToday'>
                  <h3>EL TIEMPO HOY</h3>
                  <table className='todayDetails'>
                    <tr>
                      <th className='fieldDescription'> Temperatura</th>
                      <th className='value'>0º</th>
                    </tr>
                    <tr>
                      <th className='fieldDescription'>Temp. máxima</th>
                      <th className='value'>0º</th>
                    </tr>
                    <tr>
                      <th className='fieldDescription'>Temp. mínima</th>
                      <th className='value'>0º</th>
                    </tr>
                    <tr>
                      <th className='fieldDescription'>Sensación térmica</th>
                      <th className='value'>0º</th>
                    </tr>
                    <tr>
                      <th className='fieldDescription'>Humedad</th>
                      <th className='value'>0%</th>
                    </tr>
                    <tr>
                      <th className='fieldDescription'>Viento</th>
                      <th className='value'>0 km/h</th>
                    </tr>
                  </table>
                </div>
                <div className='forecast'>
                  <div className='hourlyForecast'>
                    <h3>PRONÓSTICO POR HORAS</h3>
                    <table className='forecastTable'>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>15:00</th>
                        <th>icon</th>
                      </tr>
                    </table>
                  </div>
                  <div className='daylyForecast'>
                    <h3>PRONÓSTICO <br/> DIARIO</h3>
                    <table className='forecastTable'>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Domingo, 28</th>
                        <th>icon</th>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className='backButton'>
                <Link to="/">◄ Volver</Link>
              </div>
            </> 
                    
                    ) : (
            <ul className="locationDate">
                <li className="location">
                    <div className="circle">
                        <span className="material-symbols-sharp">location_on</span>
                    </div>
                <h2 className="cityName">Ubicación desconocida</h2>
                </li>
            </ul>
            )}
            
            <p className='footer'>Un proyecto de Sansan para Factoria F5 - Bootcamp RuralCamp.</p> 

        </section>
        <section className="columnMosaic">
            <img src="/public/mosaic/mosaic2-right.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic3-right.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic4-right.svg" alt="mosaic decoration" className="mosaic"/>
        </section>
    </main>
    </main>
  )
}



/* 
  <ul className="tempWeather">
      <li className="temp">
          <p className="mainTemp">
              {weatherValues.list[0].main.temp.toFixed(0)}&deg;
          </p>
          <div className="tempDetails">
              <p className="tempMaxMin">
                  mín. {weatherValues.list[0].main.temp_min.toFixed(0)}&deg; |{" "}
                  máx. {weatherValues.list[0].main.temp_max.toFixed(0)}&deg;
              </p>
          </div>

      </li>
      <li className="mainWeather">
          <img
              className="iconWeather"
              src={Icons(icon)}
              alt="icon-weather"
          />
          <p className="weather">
              {weatherValues.list[0].weather[0].description}
          </p>
      </li>
  </ul> */