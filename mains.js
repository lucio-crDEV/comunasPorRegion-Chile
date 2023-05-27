const Table = require('cli-table3');
const clc = require('cli-color');

// Función para obtener los códigos de las regiones
const urlRegiones = "https://apis.digital.gob.cl/dpa/regiones";

function obtenerComunasPorRegion(region) {
  const urlComunas = `${urlRegiones}/${region.codigo}/comunas`;

  return fetch(urlComunas)
    .then(response => response.json())
    .then(comunas => {
      const nombresComunas = comunas.map(comuna => comuna.nombre);
      const comunasSeparadas = nombresComunas.join("\n"); // Añadir salto de línea entre las comunas
      return {
        region: region.nombre,
        comunas: comunasSeparadas,
        cantidad: nombresComunas.length
      };
    });
}

fetch(urlRegiones)
  .then(response => response.json())
  .then(regiones => {
    const promesasComunas = regiones.map(region => obtenerComunasPorRegion(region));

    Promise.all(promesasComunas)
      .then(resultados => {
        const table = new Table({
          head: [clc.red('Región'), clc.red('Comunas'), clc.red('Cantidad \nde comunas')],
          colWidths: [40, 25, 13],
          chars: {
            'top': '-', 'top-mid': '-', 'top-left': '-', 'top-right': '-',
            'bottom': '_', 'bottom-mid': '_', 'bottom-left': '_', 'bottom-right': '_',
            'left': '|', 'left-mid': '|', 'mid': '_', 'mid-mid': '|',
            'right': '|', 'right-mid': '|', 'middle': '|' // Espacio en lugar de línea vertical
          }
        });

        resultados.forEach(resultado => {
          table.push([
            clc.cyan(resultado.region),
            clc.yellow(resultado.comunas),
            clc.green(resultado.cantidad)
          ]);
        });

        console.log(table.toString());
      })
      .catch(e => console.log(e));
  })
  .catch(e => console.log(e));