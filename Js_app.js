//Json como la base de datos
//esto hay que hacer que priermo se tier el dato y despues que entre en el marco
noticias = [];


var marco = document.getElementById("marco");

//Agregar las nuevas noticias
//funcion que te lleve al mismo sistema que el listadopuesta a mano
var lista = document.getElementById("listado");


function crearLista() {

    var elem = {
        titulo: "",
        imagen: "",
        parrafo: ""
    };


    var noticia_x = document.createElement("li");

    var noticiaLink = document.createElement("a");


    //crear las etiquetas del marco*/

        var t2 = document.createElement("h2");
        t2.textContent = document.getElementById("nota").value;
        elem.titulo = document.getElementById("nota").value;
             
            if (nota.value.length == 0){ 
          	 alert("titulo por favor") 
          	
             return 0; 
             }
            
        
        var p = document.createElement("p");
        p.textContent = document.getElementById("parrafo").value;
        elem.parrafo = document.getElementById("parrafo").value;

          if (parrafo.value.length == 0){ 
          	 alert("parrafo por favor") 
          	
             return 0; 
             }

        var imagen_img = document.createElement("img");
        imagen_img.src = "imagenes/" + document.getElementById("imagen").value.substring(12);
        elem.imagen = document.getElementById("imagen").value;
     
            if (imagen.value.length == 0){ 
          	 alert("archivo por favor") 
          	
             return 0; 
             }
    
    noticiaLink.textContent = document.getElementById("nota").value;
    noticiaLink.setAttribute("href", "#");
    noticiaLink.setAttribute("class", "link_noticia");
   

    lista.appendChild(noticia_x);
    noticia_x.appendChild(noticiaLink);
    noticiaLink.addEventListener("click", function(e){
    limpiarMarco(); // limpia marco    
    marco.appendChild(t2);
    marco.appendChild(p);
    marco.appendChild(imagen_img);
       
    });

    noticias.push(elem);
    limpiar(); // limpia los inputs     
}
 
function limpiarMarco() {
    var childs = Array.from(document.getElementById("marco").children);
    if( childs.length>0){
    for (var i=0; i<childs.length;i++) {
        console.log(childs[i]);
        marco.removeChild(childs[i]);

    }}

}

function limpiar() {

    document.getElementById("nota").value = "";
    document.getElementById("parrafo").value = "";
    document.getElementById("imagen").value = "";
};


//ya que la Id formulario no esta en ningun lado y la funcion tampoco se usa nunca
function agregaNoticia() {

    var formulario = document.getElementById("formulario");


};
//hacer que este boton interactue con el listado
var s = function Sumar() {
    console.log("sumar noticia");
 
    crearLista();

};
var sumarID = document.getElementById("id4");


sumarID.addEventListener("click", s);