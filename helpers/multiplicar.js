const fs = require('fs');
const cl = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 9 ) =>{

    

    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } ${'X'.green} ${ i } ${'='.green} ${base*i}\n`;
            consola += `${ base } X ${ i } = ${ base*i }\n`;
        }
        
        
        if(listar){
            console.clear();
            console.clear();
            console.log('==========================='.green);
            console.log(cl.rainbow(`======= Tabla del: ${ base } =======`));
            console.log('==========================='.green);
            
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, consola)
       
        
    return(`tabla-${ base}.txt`);
} catch (err) {
    throw err
}

} 

module.exports = {
    crearArchivo
}