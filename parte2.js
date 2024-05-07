// function Person(nombre, apellido, edad, profesión, hobbies) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.profesión = profesión;
//     this.hobbies = hobbies;
//   }
  
// Person.prototype.saludar = function () {
// return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
// };
// function Student(nombre, apellido, edad, promedio, cursos) {
//     Person.call(this, nombre, apellido, edad);
//     this.promedio = promedio;
//     this.cursos = cursos;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.presentarExamen = function () {
// console.log("Estoy presentando un examen.");
// };

// let persona1 = new Student("juan","amez","22");
// console.log(persona1.presentarExamen());

//////////////Tienda de punto online ////////////////////////////
//PERSONAS
function Persona(nombre,email,clave){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

//Administrador
function Administrador(nombre,email,clave,tipoadmi){
    Persona.call(this,nombre,email,clave);
    this.tipoadmi = tipoadmi;
}

Administrador.prototype = Object.create(Persona.prototype);
Administrador.prototype.constructor = Administrador;

Administrador.prototype.agregarProducto = function(){
    return console.log(`Se ha agregado el Producto correctamente`);
};
Administrador.prototype.modificarProducto = function(){
    return console.log(`Se ha modificado el Producto`);
};
Administrador.prototype.eliminarUsuario = function(){
    return console.log(`Se ha eliminado el Usuario`);
};

//Usuario
function Usuario(nombre,email,clave,puntosAcumulados){
    Persona.call(this,nombre,email,clave);
    this.puntosAcumulados = puntosAcumulados;
}

Usuario.prototype = Object.create(Persona.prototype);
Usuario.prototype.constructor = Usuario;

Usuario.prototype.acumularPuntos = function(){
    return console.log(`Se han acumulado los puntos`);
};

Usuario.prototype.canjearPuntos = function(){
    return console.log(`Se han canjeado los puntos`);
};


//PRODUCTOS
function Producto(nombre,puntosNecesarios,cantidadDisponible,precio,stock){
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.precio = precio;
  this.stock = stock;
}

//Producto Fisico

function ProductoFisico(nombre,puntosNecesarios,cantidadDisponible,precio,stock,peso){
    Producto.call(this,nombre,puntosNecesarios,cantidadDisponible,precio,stock);
    this.peso = peso;
}

ProductoFisico.prototype = Object.create(Producto.prototype);
ProductoFisico.prototype.constructor = ProductoFisico;

ProductoFisico.prototype.actualizarStock = function(){
  return  console.log("El Stock se ha actualizado");
}
ProductoFisico.prototype.obtnereInfo = function(){
  return  console.log("Información obtenida");
}
ProductoFisico.prototype.enviarProductos = function(){
  return  console.log("Producto enviado");
}

//Producto digital

function ProductoDigital(nombre,puntosNecesarios,cantidadDisponible,precio,stock,url){
  Producto.call(this,nombre,puntosNecesarios,cantidadDisponible,precio,stock);
  this.url = url;
}

ProductoDigital.prototype = Object.create(Producto.prototype);
ProductoDigital.prototype.constructor = ProductoDigital;

ProductoDigital.prototype.descargar = function(){
return  console.log("Se ha descargado");
}
ProductoDigital.prototype.obtnereInfo = function(){
return  console.log("Información obtenida");
}
ProductoDigital.prototype.obtenerProductoEmail = function(){
return  console.log("Se obtuvo el email del Producto");
}

//ACTIVIDAD
function Actividad(tipo,puntosOtorgados){
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}

Actividad.prototype.completarActividad = function(){
  console.log("Actividad completada");
}
//CATEGORIA PRODUCTOS
function Categoriadeproductos(nombre,descripcion){
  this.nombre = nombre;
  this.descripcion = descripcion;plato
  plato
}
Ordendeencaje.prototype.confirmarOrden = function(){
  console.log("Orden Confirmada");
}
Ordendeencaje.prototype.cancelarOrden = function(){
  console.log("Orden Cancelada");
}

//////////////////////Entrega de comida ////////////////////////////

//PERSONA
function Persona(nombre,email,clave){
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}

Persona.prototype.autenticacion = function(){
  console.log("Persona autenticada");
}

//CLiente
function Cliente(nombre,email,clave,direccion,telefono){
  Persona.call(this,nombre,email,clave);
  this.direccion = direccion;
  this.telefono = telefono;
}

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.realizarPedido = function(){
  console.log("Pedido realizado");
}

Cliente.prototype.verHistorialPedido = function(){
  console.log("Historial de pedidos proyectado");
}

//Repartidor
function Repartidor(nombre,email,clave,vehiculo,disponibilidad){
  Persona.call(this, nombre,email,clave);
  this.vehiculo = vehiculo;
  this.disponibilidad = disponibilidad;
}

Repartidor.prototype = Object.create(Persona.prototype);
Repartidor.prototype.constructor = Repartidor;

Repartidor.prototype.aceptarEnvio = function(){
  console.log("Envio aceptado");
}

Repartidor.prototype.actualizarUbicacion = function(){
  console.log("Ubicacion actualizada");
}

Repartidor.prototype.completarEntrega = function(){
  console.log("Entrega completada");
}

Repartidor.prototype.actualizarEstado = function(){
  console.log("Estado actualizado");
}

//RESTAURANTE

function Restaurante(nombre){
  this.nombre = nombre;
}

Restaurante.prototype.agregarPlato = function(){
  console.log("Plato agregado");
}

Restaurante.prototype.actualizarPlato = function(){
  console.log("Plato actualizado");
}

//Restaurante digital

function Restaurantedigital(nombre,menuqr){
  Restaurante.call(this,nombre);
  this.menuqr = menuqr;
}

Restaurantedigital.prototype = Object.create(Restaurante.prototype);
Restaurantedigital.prototype.constructor = Restaurantedigital;

//Restaurante fisico

function Restaurantefisico(nombre,direccion,menufisico){
  Restaurante.call(this,nombre);
  this.direccion = direccion;
  this.menufisico = menufisico;
}

Restaurantefisico.prototype = Object.create(Restaurante.prototype);
Restaurantefisico.prototype.constructor = Restaurantefisico;

Restaurantefisico.prototype.eliminarPlato = function(){
  console.log("Plato eliminado");
}

//MENU 

function Menu(plato){
  this.plato = plato;
}

//Menu Fisico
function Menufisico(plato,carta){
  Menu.call(this,plato)
  this.carta = carta;
}

Menufisico.prototype = Object.create(Menu.prototype);
Menufisico.prototype.constructor = Menufisico;

Menufisico.prototype.impresion = function(){
  console.log("ver impresion");
}

Menufisico.prototype.visualizacio = function(){
  console.log("visualizado");
}

//Menu Digital

function MenuDigital(plato,url){
  Menu.call(this,plato)
  this.url = url;
}

MenuDigital.prototype = Object.create(Menu.prototype);
MenuDigital.prototype.constructor = MenuDigital;

MenuDigital.prototype.generalQr = function(){
  console.log("QR generado");
}

//PEDIDO

function Pedido(nombre,descripcion){
  this.nombre = nombre;
  this.descargar = descripcion;
}

Pedido.prototype.listarProductos = function(){
  console.log("Productos Listados");
}

//PLATO

function Plato(tipo,puntosotorgados){
  this.tipo = tipo;
  this.puntosotorgados = puntosotorgados
}

Plato.prototype.completarActividad = function(){
  console.log("Actividad completada");
}
