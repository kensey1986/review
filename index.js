document.getElementById("formulario").addEventListener("submit", function (event) {
   capturarFormulario(event);

})


function capturarFormulario(event) {
   event.preventDefault();
   const nodoNombre = document.getElementById("nombre");
   const nombre = nodoNombre.value;

   const nodoApellido = document.getElementById("apellido");
   const apellido = nodoApellido.value;

   const nodoTelefono = document.getElementById("telefono");

   // const telfono = nodoTelefono.value;
   const telefono = nodoTelefono.valueAsNumber;

   const nodoCelular = document.getElementById("celular");

   // const celular = nodoApellido.value;
   const celular = nodoCelular.valueAsNumber;

   /**
    * nombre no contenga numeros
    */


   // for (let index = 0; index < nombre.length; index++) {
   //    const element = nombre[index];
   //    if (element === '0' || element === '1' || element==='3') {
   //       console.log('encontro uno numero')
   //    }
   // }

   const nodoErrorMsn = document.getElementById("errorMsn");
   // console.log(nombre.match(/[0-9]/))

   const result = validadorText(nombre, nodoErrorMsn);

   // if (result=== true) {
   //    return;
   // }
   const nodoResultado = document.getElementById("mostrarMisDatos");
   if (result === false) {
      nodoResultado.setAttribute("class", "bg-danger");
      nodoResultado.textContent = `Nombre:  ${nombre} Apellido: ${apellido}--- Telefono: ${telefono} `;
   }
   console.log(nodoResultado)
}

// otra funcion aparte
function validadorText(nombre, nodoErrorMsn) {
   let resp = false;

   if (nombre.match(/[0-9]/) || nombre.match(/[?*$%;',`{}[^|&=/#.@_!()<>¡ºª+-]/)) {
      resp = true;
      nodoErrorMsn.setAttribute("class", "bg-danger p-2")
      nodoErrorMsn.textContent = ' Favor No ingresar Numeros ni simbolos en el nombre';
      setTimeout(() => {
         // nodoErrorMsn.setAttribute("class", "");
         // remueven el nodo del dom
         // nodoErrorMsn.remove()
         nodoErrorMsn.removeAttribute("class");
         nodoNombre.value = '';
         nodoErrorMsn.textContent = '';
      }, 4000);

   }

   return resp;
}

/**
 * las variables (let, var)
 * son recipientes que almacennan todo tipo datos
 * y su contenido puede cambiar
 * el nombre que se le asigne a la variable debe tratar de ser 
 * descriptivo
 */

/**
 * las constantes (const)
 * son recipientes que almacenan todo tipo de datos
 * y su contenido no puede cambiar porque  es constante
 * el nombre que se le asigne a la variable debe tratar de ser 
 * descriptivo
 */

/**
 * tipos de datos
 */

// los datos numericos no deben estar entre ' ', " ",  ` `
// numericos o numeros
// number = 1566555 1 5565666555555

/**
 * los datos tipo textos o cadenas de texto
 * string = 'asfasfa asdfasf 45454'
 * string = "asfasfa asdfasf 45454"
 * string = `asfasfa asdfasf 45454`
 */

/**
 * los datos boolean (true, false)
 */

/**
 * object( { nombrePropiedad: string o number o bulean o otros objetos })
 */

// los arrays son listas de todo tipo de datos []


/**
 * en este endPoint htt://localhost:3000/products
 * aqui crea productos
 * recibe un objeto
 * persona.nombre (string)
 * persona.telefono(string)
 * persona.edad(number)
 */