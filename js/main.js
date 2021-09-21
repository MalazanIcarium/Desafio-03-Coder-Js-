let holaVeces = parseInt (prompt('Introduzca un numero entre 1 y 100'));
let acumulador = ``;
    /* Incluye un IF para asegurarnos que los parametros sean los requeridos. */
if( holaVeces > 0 && holaVeces < 101 ){
      for (let i = 1 ; i <= holaVeces ; i++) {
       acumulador += `<p> Hola! Pasaste por aca ${i} veces! </p>`
    }
} else {
    alert('Por favor introduzca un numero valido.');
    /* Añadimos un Reload para poder pasar un parametro valido desde el prompt inicial. */
    location.reload();
    }

document.write(acumulador);
