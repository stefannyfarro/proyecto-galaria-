/* 
Sesión 49: jQuery y consumo de API
Proyecto: Galería Visual
url: https://picsum.photos
*/


function generateUrl() {
    // Generamos un número aleatorio entre 0 y 500
    let id = Math.round(Math.random() * 500);
    return `https://picsum.photos/id/${id}/info`;
}


function renderPic(data) {

    // Manipulamos el DOM para agregar las imágenes

    let div = $("<div></div>");     //CREAMOS UN DIV
    div.addClass("card");       //Agregamos la clase  card al DIV 

    let img = $("<img></img>");             //CREAMOS UNA IMAGEN  
    img.attr("src", data.download_url);    //Agregamos el atributo src con la url  a la imagen
    img.addClass("card-img");              //Agregamos la clase  card-img
    div.append(img);                       //AGREGAMOS LA IMAGEN AL DIV

    let author = $("<h3></h3>");           //CREAMOS UNA ETIQUETA H3
    author.addClass("card-title");         //AGREGAMOS LA CLASE CARD-TILE AL H3 CREADO 
    author.append(data.author);            //AGREGAMOS LA DATA AL H3
    div.append(author);                    // AGREGAMOS EL AUTOR AL DIV CREADO EN LA LINEA 18 

    $('#pictures-container').append(div);    //SELECCIONAMOS EL DIV QUE ESTA EN EL HTML POR MEDIO DEL ID Y LE AGREGAMOS EL DIV CREADO EN LA LINEA 18 
}


function getPic() {

    // Consumimos la API
    $.ajax({                         //UTILIZAMOS AJAX  EN LUGAR DE FETCH
        type: 'GET',                  //ESPECIFICAMOS QUE QUEREMOS OBTENER LA DATA POR ESO SE USA GET
        url: generateUrl(),            //LE PASAMOS FUNCION QUE GENERA LA URL CON UN NUMERO ALEATORIO 
        dataType: "json",              //ESPECIFICAMOS QUE LA DATA ES DE TIPO JSON
        async: true,                    //LE PASAMOS EL VALOR DE TRUE , PARA ESPERAR UNA RESPUESTA DEL SERVIDOR 
        success: function (data) {renderPic(data)}, // En caso de consulta exitosa se ejecuta la funcion 
    });
}


$(document).ready(function () {            //CUANDO EL DOCUMENTO ESTE LISTO , NOS GENERA 10 IMAGENES 
    // Desplegamos 9 imágenes
    for (let i = 0; i < 9; i++) {
        getPic();
    }
})