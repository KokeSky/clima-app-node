const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=bc93ce73219e48498ed80a5169248c1d`
            //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
            //headers: {
            //  'X-RapidAPI-Key': '92e39de2e8msh3c905701d66cd1cp1944c9jsn605cead84745',
            //},
    });

    const resp = await instance.get();

    if (resp.data.results.length === 0)
        throw new Error(`No hay resultados para ${direccion}`);


    const direccion = resp.data.results[0].components.city;
    const { lat, lng } = resp.data.results[0].geometry;

    return {
        direccion,
        lat,
        lng
    };
}

//     return new Promise((resolve, reject) => {
//     const encodeUrl = encodeURI(direccion);
//     const instance = axios.create({
//         baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=bc93ce73219e48498ed80a5169248c1d`
//             //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
//             //headers: {
//             //  'X-RapidAPI-Key': '92e39de2e8msh3c905701d66cd1cp1944c9jsn605cead84745',
//             //},
//     });


//     instance.get()
//         .then(resp => {
//             //console.log(resp.data.results[0]);
//             resolve({
//                 direccion: resp.data.results[0].components.city,
//                 lat: resp.data.results[0].geometry.lat,
//                 lng: resp.data.results[0].geometry.lng
//             });
//             //return resp.data.results[0];
//         })
//         .catch(err => {
//             reject(err);
//         });
// });

// const instance = axios.create({
//     baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=bc93ce73219e48498ed80a5169248c1d`
//         //baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
//         //headers: {
//         //  'X-RapidAPI-Key': '92e39de2e8msh3c905701d66cd1cp1944c9jsn605cead84745',
//         //},
// });

// instance.get()
// .then(resp => {
//     console.log(resp.data.results[0]);
//     return {
//         direccion: resp.data.results[0].components.city,
//         lat: resp.data.results[0].geometry.lat,
//         lng: resp.data.results[0].geometry.lng
//     }
//     //return resp.data.results[0];
// })
// .catch(err => {
//     return new Error('ERROR!!!', err);
//     //console.log('ERROR!!!', err);
// });


module.exports = {
    getLugarLatLng
}