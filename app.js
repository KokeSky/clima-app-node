const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {

    try {
        const ciudad = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(ciudad);
        return `El clima de ${direccion} es de ${temperatura}`
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         clima.getClima(resp)
//             .then(resp => console.log(resp))
//     });