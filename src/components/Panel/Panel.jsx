import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Panel.css";
import { getUserLocation } from "../../geolocation";
import Icons from '../Icons';

export const Panel = () => {
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
    
    const handleSearch = (e) => {
        if (e.key === "Enter") {
        setSearch(e.target.value);
        }
    };

    const handleButtonSearch = (value) => {
        setSearch(value);
    }
    
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
    <main className="mainContent">
        <section className="columnMosaic">
            <img src="/public/mosaic/mosaic2-left.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic3-left.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic4-left.svg" alt="mosaic decoration" className="mosaic"/>
        </section>
        <section className="panel">
            <div className="searchContainer">
                <input
                    onKeyDown={handleSearch}
                    type="text"
                    placeholder="El tiempo en..."
                    autoFocus
                />
                <div
                    className="searchButton"
                    onClick={() => handleButtonSearch(document.querySelector('input').value)}
                >
                    Buscar                    
                </div>
            </div>

            <div className="weatherInfoContainer">
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
                                <Link to={`/weatherDetails/${search}`}>Más detalles</Link>
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
            </div>
            
            <p className='footer'>Un proyecto de Sansan para Factoria F5 - Bootcamp RuralCamp.</p>

        </section>
        <section className="columnMosaic">
            <img src="/public/mosaic/mosaic2-right.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic3-right.svg" alt="mosaic decoration" className="mosaic"/>
            <img src="/public/mosaic/mosaic4-right.svg" alt="mosaic decoration" className="mosaic"/>
        </section>
    </main>
    );
};
