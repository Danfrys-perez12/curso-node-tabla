
const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = true, hasta = 10) => {

    try {


        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n `;
            consola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n `;
        }

        if (listar) {
            console.log('================'.green);
            console.log('Tabla del:'.yellow, colors.blue(base));
            console.log('================'.red);
            console.log(consola)
        }

        //creando un archivo que se guarde en un archivo de texto
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`tabla-${base}.txt`);

    } catch (err) {
        throw err;
    }

}

//como podemos exportar archivos
module.exports = {
    crearArchivo: crearArchivo
}