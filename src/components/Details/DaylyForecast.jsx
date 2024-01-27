/* eslint-disable react/prop-types */
import Icons from "../Icons";
import '../Details/Details.css'
import '../Home/Home.css';
import '../Panel/Panel.css';

export const DaylyForecast = ({ weatherValues }) => {
    return (
        <div className='daylyForecast'>
            <h3>PRONÓSTICO <br/> DIARIO</h3>
            <table className='forecastTable'>
                <tbody>
                    {weatherValues.list.filter((element, index) =>
                        (index % 8 === 0))
                    .map((daylyData, index) => (
                        <tr key={index}>
                            <th className="fieldDescription">
                                {daylyData.dt_txt.slice(8, 10)}-{daylyData.dt_txt.slice(5, 7)}
                            </th>
                            <th>
                                <img
                                    className="smallIconWeather"
                                    src={Icons(daylyData.weather[0].main)}
                                    alt="icon-weather" />
                            </th>
                            <th className='weatherDescription'>{daylyData.weather[0].description}</th>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}