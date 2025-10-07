
//exportar archivo
//const { argv, argv } = require('process');
//const { boolean } = require('yargs');
//const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' Creado'))
    .catch(err => console.log(err));

//console.log(process.argv)
//console.log('base: yargs', argv.base)






























/*console.log('====================================');
console.log('     Tabla del: 5');
console.log('====================================');*/



//const [, , arg3 ='base =5'] = process.argv;//desustructuracion
//const [, base = 5 ] = arg3.split ('=');

//console.log(base);


//const base = 10;
/*let salida ='';

for(let num = 1; num<=10; num++){
    salida += (`${base} x ${num} = ${base * num}\n `);
}
console.log(salida)

 //creando un archivo que se guarde en un archivo de texto
fs.writeFileSync( `tabla-${base}.txt`, salida)
   
    
    console.log(`tabla-${base}.txt creado`);*/
