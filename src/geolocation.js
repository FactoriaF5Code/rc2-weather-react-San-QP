export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
              .then((response) => response.json())
              .then((data) => {
                const city = data.address.city || data.address.town || data.address.village || data.address.hamlet;
                resolve(city);
              })
              .catch((error) => {
                console.error('Error al obtener la ciudad:', error);
                reject(error);
              });
          },
          (error) => {
            console.error('Error al obtener la ubicación:', error);
            reject(error);
          }
        );
      } else {
        const error = new Error('La geolocalización no está disponible en este navegador.');
        console.error(error);
        reject(error);
      }
    });
  };
  