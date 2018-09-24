const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then((tabla) => {
                console.log(tabla);
            })
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => {
                console.log(`Archivo creado `, colors.green(archivo));
            })
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(process.argv);
//let argv2 = process.argv;

//console.log('Base ', argv.base);
//console.log('Limite ', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];