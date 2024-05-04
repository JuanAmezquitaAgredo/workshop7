function Person(nombre, apellido, edad, profesión, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesión = profesión;
    this.hobbies = hobbies;
  }
  
Person.prototype.saludar = function () {
return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
};
function Student(nombre, apellido, edad, promedio, cursos) {
    Person.call(this, nombre, apellido, edad);
    this.promedio = promedio;
    this.cursos = cursos;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.presentarExamen = function () {
console.log("Estoy presentando un examen.");
};

let persona1 = new Student("juan","amez","22");
console.log(persona1.presentarExamen());

//////////////Tienda de punto online ////////////////////////////

// function persona(nombre,email,clave){
//     this.nombre = nombre;
//     this.email = email;
//     this.clave = clave;
// }

// //Administrador
// function administrador(nombre,email,clave,tipoadmi){
//     persona.call(this,nombre,email,clave);
//     this.tipoadmi = tipoadmi;
// }

// administrador.prototype.agregarProducto = function(){
//     return console.log(`Se ha agregado el producto correctamente`);
// };
// administrador.prototype.modificarProducto = function(){
//     return console.log(`Se ha modificado el producto`);
// };
// administrador.prototype.eliminarUsuario = function(){
//     return console.log(`Se ha eliminado el usuario`);
// };

// //Usuario
// function usuario(nombre,email,clave,puntosAcumulados){
//     persona.call(this,nombre,email,clave);
//     this.puntosAcumulados = puntosAcumulados;
// }

// usuario.prototype.acumularPuntos = function(){
//     return console.log(`Se han acumulado los puntos`);
// };

// usuario.prototype.canjearPuntos = function(){
//     return console.log(`Se han canjeado los puntos`);
// };