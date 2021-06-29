
function probarValidarNombre() {
console.assert(validarNombre("") === "El campo debe tener al menos un caracter", 
"Validar nombre no funcionó con un string vacío")

console.assert(validarNombre("sjfdldsjklfsjaflsjlfjlfajallfjlsadljslajflajaljflasdjflsafjalfjsalfjafslafjslafjalsfsjlsalsafjlsafjlajfdlafjlallse") === "El campo debe tener menos de 50 caracteres", 
"Validar nombre no validó que el nombre no sea mayor a 50 caracteres")
}


function probarValidarCiudad() {
  console.assert(validarCiudad("") === "El campo 'ciudad' no puede estar vacío",
  "ProbarValidarCiudad no validó que el campo ciudad no esté vacío"
  )
}


function probarValidarDescripcionRegalo() {
  console.assert(validarDescripcionRegalo("") === "¡No te olvides de escribirle a Santa el regalo que quieres!",
  "probarValidarDescripcionRegalo no validó que el campo descripción regalo no esté vacío"
  )

  console.assert(validarDescripcionRegalo("j") === "Escribe una descripción de más de 10 caracteres y menor a 100 caracteres.", 
"validarDescripcionRegalo no validó que la descripcion no sea mayor a 100 caracteres")
}

probarValidarNombre()
probarValidarCiudad()
probarValidarDescripcionRegalo()