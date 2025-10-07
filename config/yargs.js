const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
        describe: ' Muestra la tabla de multiplicar '

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: ' Muestra el multiplo '

    })
    .check((argv, options) => {
        if (isNaN(argv.b || isNaN(argv.h))) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;