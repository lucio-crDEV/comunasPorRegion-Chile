// Consulta que genera arreglo de comunas por región
// Se debe cambiar la query segun la documentación para obtener datos deseados. Fuente: https://apis.digital.gob.cl/dpa
/* import fetch from 'node-fetch'; */

// [----------- DATA -----------------]
// 'ID: 01 - Región: Tarapacá',
// 'ID: 02 - Región: Antofagasta',
// 'ID: 03 - Región: Atacama',
// 'ID: 04 - Región: Coquimbo',
// 'ID: 05 - Región: Valparaíso',
// 'ID: 06 - Región: Del Libertador Gral. Bernardo O’Higgins',
// 'ID: 07 - Región: Del Maule',
// 'ID: 08 - Región: Del Biobío',
// 'ID: 09 - Región: De la Araucanía',
// 'ID: 10 - Región: De los Lagos',
// 'ID: 11 - Región: Aysén del Gral. Carlos Ibáñez del Campo',
// 'ID: 12 - Región: Magallanes y de la Antártica Chilena',
// 'ID: 13 - Región: Metropolitana de Santiago',
// 'ID: 14 - Región: De los Ríos',
// 'ID: 15 - Región: Arica y Parinacota',
// 'ID: 16 - Región: Ñuble' 
// [-------------------------------------------------]


// Implementación (reemplazar id)
// .../regiones/:id -> Para consultar Región
// .../regiones/:id/comunas -> Para consultar comunas por región
/* const id = 16
const urlRegion = `https://apis.digital.gob.cl/dpa/regiones/${id}`;
const urlComunas = `https://apis.digital.gob.cl/dpa/regiones/${id}/comunas`;

fetch(urlRegion)
    .then(response => response.json())
    .then(region => console.log(`Región: ${region.nombre}`))
    .catch(e => console.log(e))

fetch(urlComunas)
    .then(response => response.json())
    .then(comunas => {
        let acum = [];
        for (let i = 0; i < comunas.length; i++) { acum.push(`${comunas[i].nombre}`) }
        console.log(acum)
        console.log(`\n` + "Cantidad de comunas: " + acum.length)
    })
    .catch(e => console.log(e))
     */