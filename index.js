
 document.getElementById("formulario").addEventListener("submit", function(event){
    capturarFormulario(event);
  
 })


function capturarFormulario(event){
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
   console.log(nombre.length)


   for (let index = 0; index < nombre.length; index++) {
      const element = nombre[index];
      if (element === '0' || element === '1') {
         console.log('encontro uno numero')
      }
   }


   //  console.log('esto tiene el telefono ', telefono )
   //  console.log('valor validacion', telefono <=0)
   // if (telefono === undefined && telefono <=0) {
   //    console.log('ha ocurrido un error');
   //    return;
   // }


   // console.log('esto tiene el telefono ', telefono )
   // console.log('valor validacion 1', !telefono === undefined)
   // console.log('valor validacion 2', !telefono <=0)
   // console.log('valor validacion 3', !telefono <=null)
//    console.log('valor validacion 3', telefono !== 0)
//    console.log(telefono)
//   if ((telefono !== 0 && true) || telefono < 100) {
//       console.log('realizo algo aqui ')
//   }



    const nodoResultado = document.getElementById("mostrarMisDatos");

    // nodoResultado.textContent = 'Nombre: ' + nombre;
    nodoResultado.setAttribute("class", "bg-danger");
    nodoResultado.textContent = `Nombre:  ${nombre} Apellido: ${apellido}--- Telefono: ${telefono} `;
    console.log(nodoResultado)

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