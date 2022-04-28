
 document.getElementById("formulario").addEventListener("submit", function(event){
    capturarFormulario(event);
  
 })


function capturarFormulario(event){
    event.preventDefault();
    const nodoNombre = document.getElementById("nombre");
    const nombre = nodoNombre.value;
    console.log('====================================');
    console.log(nombre);
    console.log('====================================');
}
