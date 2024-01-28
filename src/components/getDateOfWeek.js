export const getCurrentDayOfWeek = () => {
    const currentDate = new Date();
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return daysOfWeek[currentDate.getDay()];
    };  