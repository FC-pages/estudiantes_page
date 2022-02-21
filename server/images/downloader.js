
const imageDownloader = require('./download-image').download;

const obtenernombreapellido = ( nombre) => {
  // Para obtener el primer nombre y el primer apellido
    
    let nombres = nombre.split(",");
    let primernombre = nombres[1].split(" ")[1];
    //console.log(nombres[0].split(" "))
    // Profesora La Rosa
    let primerapellido = nombres[0] === "LA ROSA OBANDO" ? "La Rosa": nombres[0].split(" ")[0];
    return primernombre +  "_" + primerapellido;
}


// Fichero de salida con el directorio al que vamos a guardar
const filename = (nombres) => { 

  nombre = obtenernombreapellido(nombres).toLowerCase().replace(/ /g, "");

  return 'docentes/'.concat(`${nombre}.jpg`);
}

var request = require("request")

// Url del JSON de los profesores
let url = "https://script.google.com/macros/s/AKfycbxi87UTrnqYqzdpEvutfJO1nUbKMHJOo_Te3-PWCC5Wa0lD4Cs/exec";

// Petición 
request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) { // Si se ha obtenido el JSON
        body.docentes.map((d, i) => {
          if (d.foto == undefined) return  // Si el docente no tiene foto
          imageDownloader(d.foto, filename(d.nombres), function(){
              console.log(`${url} image download!!`);
          });
        })
    }
})
