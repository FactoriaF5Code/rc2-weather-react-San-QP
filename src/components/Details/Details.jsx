import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { HourlyForecast } from "./HourlyForecast";
import './Details.css';
import '../Home/Home.css';
import '../Panel/Panel.css';

export const Details = () => {
  const [weatherValues, setWeatherValues] = useState("");
  const { location } = useParams();

  const currentDate = new Date();
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()]
        
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=es&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
    
  const getData = async () => {
      await fetch(URL)
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          if (data.cod >= 400) {
              setWeatherValues(false);
          } else {
              setWeatherValues(data);
          }
      })
      .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
      });
  };
          
  useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location]); 
  
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
                    <tbody>
                      <tr>
                        <th className='fieldDescription'> Temperatura</th>
                        <th className='value'>{weatherValues.list[0].main.temp.toFixed(0)}&deg;</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Temp. máxima</th>
                        <th className='value'>{weatherValues.list[0].main.temp_max.toFixed(0)}&deg;</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Temp. mínima</th>
                        <th className='value'>{weatherValues.list[0].main.temp_min.toFixed(0)}&deg;</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Sensación térmica</th>
                        <th className='value'>{weatherValues.list[0].main.feels_like.toFixed(0)}&deg;</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Humedad</th>
                        <th className='value'>{weatherValues.list[0].main.humidity}%</th>
                      </tr>
                      <tr>
                        <th className='fieldDescription'>Viento</th>
                        <th className='value'>{weatherValues.list[0].wind.speed} km/h</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='forecast'>
                  <HourlyForecast weatherValues={weatherValues} />
                  {/* <div className='daylyForecast'>
                    <h3>PRONÓSTICO <br/> DIARIO</h3>
                    <table className='forecastTable'>
                      <tbody>
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
                      </tbody>
                    </table>
                  </div> */}
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