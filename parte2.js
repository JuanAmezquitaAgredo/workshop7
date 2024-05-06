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
function persona(nombre,email,clave){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

//Administrador
function administrador(nombre,email,clave,tipoadmi){
    persona.call(this,nombre,email,clave);
    this.tipoadmi = tipoadmi;
}

administrador.prototype.agregarProducto = function(){
    return console.log(`Se ha agregado el producto correctamente`);
};
administrador.prototype.modificarProducto = function(){
    return console.log(`Se ha modificado el producto`);
};
administrador.prototype.eliminarUsuario = function(){
    return console.log(`Se ha eliminado el usuario`);
};

//Usuario
function usuario(nombre,email,clave,puntosAcumulados){
    persona.call(this,nombre,email,clave);
    this.puntosAcumulados = puntosAcumulados;
}

usuario.prototype.acumularPuntos = function(){
    return console.log(`Se han acumulado los puntos`);
};

usuario.prototype.canjearPuntos = function(){
    return console.log(`Se han canjeado los puntos`);
};


//PRODUCTOS
function producto(nombre,puntosNecesarios,cantidadDisponible,precio,stock){
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.precio = precio;
  this.stock = stock;
}

//Producto Fisico

function ProductoFisico(nombre,puntosNecesarios,cantidadDisponible,precio,stock,peso){
    producto.call(this,nombre,puntosNecesarios,cantidadDisponible,precio,stock);
    this.peso = peso;
}

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
  producto.call(this,nombre,puntosNecesarios,cantidadDisponible,precio,stock);
  this.url = url;
}

ProductoDigital.prototype.descargar = function(){
return  console.log("Se ha descargado");
}
ProductoDigital.prototype.obtnereInfo = function(){
return  console.log("Información obtenida");
}
ProductoDigital.prototype.obtenerProductoEmail = function(){
return  console.log("Se obtuvo el email del producto");
}

//ACTIVIDAD
function actividad(tipo,puntosOtorgados){
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}

actividad.prototype.completarActividad = function(){
  console.log("Actividad completada");
}
//CATEGORIA PRODUCTOS
function categoriadeproductos(nombre,descripcion){
  this.nombre = nombre;
  this.descripcion = descripcion;
}
categoriadeproductos.prototype.listarProductos = function(){
  console.log("Se listaron los productos");
}
//ORDEN DE ENCAJE
function ordendeencaje(usuario,producto,fecha){
  this.usuario = usuario;
  this.producto = producto;
  this.fecha = fecha;
}
ordendeencaje.prototype.confirmarOrden = function(){
  console.log("Orden Confirmada");
}
ordendeencaje.prototype.cancelarOrden = function(){
  console.log("Orden Cancelada");
}

//////////////////////Entrega de comida ////////////////////////////

//PERSONA
function persona(nombre,email,clave){
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}

persona.prototype.autenticacion = function(){
  console.log("Persona autenticada");
}

//CLiente
function cliente(nombre,email,clave,direccion,telefono){
  persona.call(this,nombre,email,clave);
  this.direccion = direccion;
  this.telefono = telefono;
}

cliente.prototype.realizarPedido = function(){
  console.log("Pedido realizado");
}

cliente.prototype.verHistorialPedido = function(){
  console.log("Historial de pedidos proyectado");
}

//Repartidor
function repartidor(nombre,email,clave,vehiculo,disponibilidad){
  persona.call(this, nombre,email,clave);
  this.vehiculo = vehiculo;
  this.disponibilidad = disponibilidad;
}

repartidor.prototype.aceptarEnvio = function(){
  console.log("Envio aceptado");
}

repartidor.prototype.actualizarUbicacion = function(){
  console.log("Ubicacion actualizada");
}

repartidor.prototype.completarEntrega = function(){
  console.log("Entrega completada");
}

repartidor.prototype.actualizarEstado = function(){
  console.log("Estado actualizado");
}

//RESTAURANTE

function restaurante(nombre){
  this.nombre = nombre;
}

restaurante.prototype.agregarPlato = function(){
  console.log("Plato agregado");
}

restaurante.prototype.actualizarPlato = function(){
  console.log("Plato actualizado");
}

//restaurante digital

function restaurantedigital(nombre,menuqr){
  restaurante.call(this,nombre);
  this.menuqr = menuqr;
}

//restaurante fisico

function restaurantefisico(nombre,direccion,menufisico){
  restaurante.call(this,nombre);
  this.direccion = direccion;
  this.menufisico = menufisico;
}

restaurantefisico.prototype.eliminarPlato = function(){
  console.log("Plato eliminado");
}

//MENU 

function menu(plato){
  this.plato = plato;
}

//Menu Fisico
function menufisico(plato,carta){
  menu.call(this,plato)
  this.carta = carta;
}

menufisico.prototype.impresion = function(){
  console.log("ver impresion");
}

menufisico.prototype.visualizacio = function(){
  console.log("visualizado");
}

//Menu Digital

function menuDigital(plato,url){
  menu.call(this,plato)
  this.url = url;
}

menuDigital.prototype.generalQr = function(){
  console.log("QR generado");
}

//PEDIDO

function pedido(nombre,descripcion){
  this.nombre = nombre;
  this.descargar = descripcion;
}

pedido.prototype.listarProductos = function(){
  console.log("Productos Listados");
}

//PLATO

function plato(tipo,puntosotorgados){
  this.tipo = tipo;
  this.puntosotorgados = puntosotorgados
}

plato.prototype.completarActividad = function(){
  console.log("Actividad completada");
}
