import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import Icons from '../Icons';
import './Details.css';
import '../Home/Home.css';
import '../Panel/Panel.css';

export const Details = () => {
  const [weatherValues, setWeatherValues] = useState("");
  const { location } = useParams();
  const [icon1, setIcon1] = useState("");
  const [icon2, setIcon2] = useState("");
  const [icon3, setIcon3] = useState("");
  const [icon4, setIcon4] = useState("");
  const [icon5, setIcon5] = useState("");
  const [icon6, setIcon6] = useState("");
  const [icon7, setIcon7] = useState("");

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
              setIcon1(data.list[1].weather[0].main);
              setIcon2(data.list[0].weather[0].main);
              setIcon3(data.list[0].weather[0].main);
              setIcon4(data.list[0].weather[0].main);
              setIcon5(data.list[0].weather[0].main);
              setIcon6(data.list[0].weather[0].main);
              setIcon7(data.list[0].weather[0].main);
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
                  <div className='hourlyForecast'>
                    <h3>PRONÓSTICO POR HORAS</h3>
                    <table className='forecastTable'>
                      <tbody>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[0].dt_txt.slice(11, 16)}</th>
                          <th>
                            <img
                                className="smallIconWeather"
                                src={Icons(icon1)}
                                alt="icon-weather"
                            />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[0].weather[0].description}</th>
                        </tr>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[1].dt_txt.slice(11, 16)}</th>
                          <th>
                            <img
                                  className="smallIconWeather"
                                  src={Icons(icon2)}
                                  alt="icon-weather"
                              />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[1].weather[0].description}</th>
                        </tr>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[2].dt_txt.slice(11, 16)}</th>
                          <th>                            
                            <img
                                className="smallIconWeather"
                                src={Icons(icon3)}
                                alt="icon-weather"
                            />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[2].weather[0].description}</th>
                        </tr>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[3].dt_txt.slice(11, 16)}</th>
                          <th>                           
                            <img
                                className="smallIconWeather"
                                src={Icons(icon4)}
                                alt="icon-weather"
                            />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[3].weather[0].description}</th>
                        </tr>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[4].dt_txt.slice(11, 16)}</th>
                          <th>
                            <img
                                className="smallIconWeather"
                                src={Icons(icon5)}
                                alt="icon-weather"
                            />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[4].weather[0].description}</th>
                        </tr>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[5].dt_txt.slice(11, 16)}</th>
                          <th>                           
                            <img
                                className="smallIconWeather"
                                src={Icons(icon6)}
                                alt="icon-weather"
                            />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[5].weather[0].description}</th>
                        </tr>
                        <tr>
                          <th className='fieldDescription'>{weatherValues.list[6].dt_txt.slice(11, 16)}</th>
                          <th>
                          <img
                              className="smallIconWeather"
                              src={Icons(icon7)}
                              alt="icon-weather"
                          />
                          </th>
                          <th className='weatherDescription'>{weatherValues.list[6].weather[0].description}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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