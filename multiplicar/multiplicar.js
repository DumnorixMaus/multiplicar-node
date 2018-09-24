// recuareds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un número`);
            return;
        }

        let data = '';
        data += "====================\n".green;
        data += `Tabla del ${ base }\n`.green;
        data += "====================\n".green;
        for (i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${ base } * ${ i } = ${ resultado }\n`.blue;
        }

        resolve(data);

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un número`);
            return;
        }

        let data = '';
        data += `---------------Tabla del ${ base } ---------------\n`;
        for (i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${ base } * ${ i } = ${ resultado }\n`;

        }

        fs.writeFile(`tablas/tablas-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablas-del-${base}-al-${limite}.txt`);
        });

    })
}

/// exporta la funcion para porder ser usada de forma globar en toda la aplicacion
module.exports = {
    crearArchivo,
    listarTabla
}