const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Descripcion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}