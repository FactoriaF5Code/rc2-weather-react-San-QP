import './Details.css';
import '../Home/Home.css';
import '../Panel/Panel.css';
import { Header } from "../Header/Header";

export const Details = () => {
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
            {/* <div className="weatherInfoContainer">
                {weatherValues ? (
                <div>
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
                            <div className="detailsButton">
                                <Link to="/weatherDetails" >Más detalles</Link>
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
                    </ul>
                    
                </div>
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
            </div>*/}
            
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