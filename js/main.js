const formulario = document.querySelector("#carta-a-santa")
const nombre = formulario.nombre
const ciudad = formulario.ciudad
const comportamiento = formulario.comportamiento
const descripcionRegalo = formulario["descripcion-regalo"]
const botonEnviarCarta = formulario.submit
const errores = document.querySelector("#errores")
const mensajeExito = document.querySelector("#exito")





function validarNombre (nombre) {
 
  if (nombre.length === 0) {
      return "El campo debe tener al menos un caracter"
  }

  if (nombre.length >= 50) {
      return "El campo debe tener menos de 50 caracteres"
  }

  return ""
}



function validarCiudad(ciudad) {
 if (ciudad.length === 0) {
   return "El campo 'ciudad' no puede estar vacío"
 }

 return ""
}

function validarDescripcionRegalo(descripcionRegalo) {
   if(descripcionRegalo.length === 0) {
     return "¡No te olvides de escribirle a Santa el regalo que quieres!"
   }

   if (descripcionRegalo.length >= 100 || descripcionRegalo.length < 10) {
     return "Escribe una descripción de más de 10 caracteres y menor a 100 caracteres."
   }

   return ""
}

function generarErroresDeFormulario () {
  const listaDeErrores = []

   const chequearSiHayErrorNombre = validarNombre(nombre.value)
   const chequearSiHayErrorCiudad = validarCiudad(ciudad.value)
   const chequearSiHayErrorDescripcion = validarDescripcionRegalo(descripcionRegalo.value)

   listaDeErrores.push(chequearSiHayErrorCiudad, chequearSiHayErrorNombre, chequearSiHayErrorDescripcion)

   return listaDeErrores
}

function mostrarErroresEnPantalla(listaDeErrores) {
  for (let i = 0; i < listaDeErrores.length; i++) {
   if (listaDeErrores[i] === "") {
     continue;
   } else {
     const error = document.createElement("li")
     error.textContent = listaDeErrores[i]
     errores.appendChild(error)
   }
 }
}

function borrarErroresEnPantalla () {
  errores.textContent = ""
}

botonEnviarCarta.onclick = function (e) {
  e.preventDefault() 

  const listaDeErrores = generarErroresDeFormulario()
  borrarErroresEnPantalla() 
  mostrarErroresEnPantalla(listaDeErrores)

  

  if (errores.children.length === 0) {
    mensajeExito.classList.remove("oculto") 
  }

}

