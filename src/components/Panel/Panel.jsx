import { useEffect, useState } from "react";
import "./Panel.css";
import { getUserLocation } from "../../geolocation";

export const Panel = () => {
    const [search, setSearch] = useState("");
    const [weatherValues, setWeatherValues] = useState("");

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
    
    const currentDate = new Date();
    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()]
    
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
    <section className="panel">
        <div className="divider">
            <div className="deepBlue"></div>
            <div className="orange"></div>
            <div className="blue"></div>
            <div className="yellow"></div>
        </div>
        <div className="searchContainer">
            <input
                onKeyDown={handleSearch}
                type="text"
                placeholder="Busca una localización"
                autoFocus
            />
            <div
                className="searchButton"
                onClick={() => handleButtonSearch(document.querySelector('input').value)}
            >
                Buscar
            </div>
        </div>

        <div className="card">
            {weatherValues ? (
            <div className="cardContainer">
                <div className="circle">
                    <span className="material-symbols-sharp">location_on</span>
                </div>
                <h2 className="cityName">{weatherValues.city.name}</h2>
                <p className="date">
                    {`${currentDayOfWeek}, ${weatherValues.list[0].dt_txt.substring(0, weatherValues.list[0].dt_txt.length - 9)}`}
                </p>
                <p className="weather">
                    {weatherValues.list[0].weather[0].description}
                </p>
                <div className="info">
                    <div className="temp">
                        <p className="mainTemp">
                            {weatherValues.list[0].main.temp.toFixed(0)}&deg;
                        </p>
                        <div className="card-footer">
                            <p className="temp-max-min">
                                {weatherValues.list[0].main.temp_min.toFixed(0)}&deg; |{" "}
                                {weatherValues.list[0].main.temp_max.toFixed(0)}&deg;
                            </p>
                        </div>
                    </div>
                    <img
                        className="iconWeather"
                        src={`https://openweathermap.org/img/wn/${weatherValues.list[0].weather[0].icon}.png`}
                        alt="icon-weather"
                    />
                    </div>
            </div>
            ) : (
            <h2 className="cityName">{"Ubicación no disponible"}</h2>
            )}
        </div>
    </section>
    );
};
