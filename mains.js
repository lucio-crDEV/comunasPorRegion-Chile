// Función para obtener los códigos de las regiones
function obtenerCodigosRegiones(regiones) {
    var codigos = [];
    for (var i = 0; i < regiones.length; i++) {
      var region = regiones[i];
      codigos.push(region.codigo);
    }
    return codigos;
  }
  const urlRegiones = "https://apis.digital.gob.cl/dpa/regiones";
  fetch(urlRegiones)
    .then(response => response.json())
    .then(regiones => {
      // Obtener los códigos de las regiones
      var codigosRegiones = obtenerCodigosRegiones(regiones);
  
      // Imprimir una respuesta por cada código de región
      console.log("Respuestas por cada código de región:");
  
      codigosRegiones.forEach(codigo => {
        const urlComunas = urlRegiones + "/" + codigo + "/comunas";
        let acum = [];
  
        fetch(urlComunas)
          .then(response => response.json())
          .then(comunas => {
            console.log('\n')
            console.log(`Región: ${comunas[0].nombre}`);
            for (let i = 0; i < comunas.length; i++) {
                acum.push(`${comunas[i].nombre}`);
            }
            console.log(`Comunas: " ${acum} "`);
            console.log(`Cantidad de comunas: ${acum.length}`);

          })
          .catch(e => console.log(e));
      });
    })
    .catch(e => console.log(e));
