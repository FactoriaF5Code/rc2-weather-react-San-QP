const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon = 'icons-weather/light/storm.svg'
            console.log("TORMENTA")
            break;
        case 'Drizzle':
            icon='../../public/icons-weather/light/sun-rain.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            icon='../../public/icons-weather/light/rain.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            icon='../../public/icons-weather/light/snow.svg'
            console.log('NIEVE');
            break;                        
        case 'Clear':
            icon='../../public/icons-weather/light/sun.svg'
            console.log('SOL');
            break;
        case 'Fog':
            icon='../../public/icons-weather/light/fog.svg'
            console.log('NIEBLA');
            break;
        case 'Clouds':
            icon='../../public/icons-weather/light/bad-clouds.svg'
            console.log('NUBES');
            break;
        default:
            icon='../../public/icons-weather/light/clear-day.svg'
            console.log('SOL');
    }
    return icon
}

export default Icons
