import Icons from '../Icons';
import './Details.css';
import '../Home/Home.css';
import '../Panel/Panel.css';

export const HourlyForecast = ({ weatherValues }) => {
    return (
      <div className='hourlyForecast'>
        <h3>PRONÓSTICO POR HORAS</h3>
        <table className='forecastTable'>
          <tbody>
            {weatherValues.list.slice(0, 7).map((hourlyData, index) => (
              <tr key={index}>
                <th className='fieldDescription'>{hourlyData.dt_txt.slice(11, 16)}</th>
                <th>
                  <img
                    className="smallIconWeather"
                    src={Icons(hourlyData.weather[0].main)}
                    alt="icon-weather"
                  />
                </th>
                <th className='weatherDescription'>{hourlyData.weather[0].description}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };