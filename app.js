const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//let base = '5';
//console.log(process.argv);
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(argv.limite);