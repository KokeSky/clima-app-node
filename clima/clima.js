const axios = require('axios');


const getClima = async(ciudad) => {

    const { lat, lng } = ciudad;

    const key = 'fece0b3acc6f0625131100e73bac55fe';
    const units = 'metric';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=${units}`);

    if (resp.status !== 200)
        throw new Error(`No hay resultados para ${direccion}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}