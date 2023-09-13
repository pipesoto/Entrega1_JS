
// Función que contiene el código JavaScript
function verTienda() {
  alert("Bienvenidos a nuestro Minimarket Sotelifran")
// Variables $ precios para productos de carne
let pollo = 2990;
let cerdo = 5900;
let vacuno = 9900;

// Variables $ precios para productos de lácteos
let leche = 1500;
let yogurt = 300;

// Variables $ precios para productos de ferretería
let pintura = 4000;
let lijas = 200;
let tornillos = 30;

// Variables para productos de despensa
let arroz = 1200;
let tallarines = 900;
let cafe = 5500;
let azucar = 1000;
// declaramos carrito de compras vacío
let carrito = "";
// Variable para almacenar el total de la compra
let totalCompra = 0; 
// Función para normalizar el texto (sin tildes y en minúsculas)
function normalizarTexto(texto) {
return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// Funcion para clacular el precio total con parámetros -- producto y cantidad
function calcularPrecioTotal(producto, cantidad) {
let precio = 0;
producto = normalizarTexto(producto);
// asignamos precio al producto solicitado de una categoría 
switch (producto) {
  case "pollo":
    precio = pollo;
    break;
  case "cerdo":
    precio = cerdo;
    break;
  case "vacuno":
    precio = vacuno;
    break;
  case "leche":
    precio = leche;
    break;
  case "yogurt":
    precio = yogurt;
    break;
  case "pintura":
    precio = pintura;
    break;
  case "lijas":
    precio = lijas;
    break;
  case "tornillos":
    precio = tornillos;
    break;
  case "arroz":
    precio = arroz;
    break;
  case "tallarines":
    precio= tallarines;
    break;
  case "cafe":
    precio = cafe;
    break;
  case "azucar":
    precio = azucar;
    break;
}
//calculamos precio total a pagar
const precioTotal = precio * cantidad;
return precioTotal;
}
// Funcion que nos permite controlar que es lo que desea hacer el usuario ( comprar, pagar, salir)
function menu() {
let continuar=true;
while(continuar){
let accion = prompt("¿Qué quieres hacer?\n1. Comprar\n2. Pagar\n3. Salir");
switch (accion) {
  case '1':
    comprar();
    break;
  case '2':
  if (carrito !== "") {
  pagar();
} else {
  alert("El carrito de compras está vacío.");
  menu();
}
break;
  case '3':
    alert("Gracias por visitar la tienda. ¡Hasta luego!");
    continuar=false;
    break;
  default:
    alert("Opción no válida.");
    menu();
    break;
}
}
}

// Funcion que permite realizar una compra al usuario
function comprar() {
while (true) {
  let categoria = prompt("Selecciona una categoría:\ncarnes, lácteos, ferretería, despensa");

  categoria = normalizarTexto(categoria);

  let mensajeCategoria = "";

  switch (categoria) {
    case "carnes":
      mensajeCategoria = "Productos de Carnes:\npollo, cerdo, vacuno";
      break;
    case "lacteos":
      mensajeCategoria = "Productos de Lácteos:\nleche, yogurt";
      break;
    case "ferreteria":
      mensajeCategoria = "Productos de Ferretería:\npintura, lijas, tornillos";
      break;
    case "despensa":
      mensajeCategoria = "Productos de Despensa:\narroz, tallarines, cafe, azucar";
      break;
    default:
      alert("Categoría no válida.");
      continue;
  }

  alert(mensajeCategoria);

  let producto;

  // Ciclo for para seleccionar un producto válido dentro de la categoría
  for (let i = 0; i < 3; i++) {
    producto = prompt("Selecciona un producto de "+categoria+" :");
    if (producto) {
      producto = normalizarTexto(producto);

      if (categoria === "carnes" && (producto === "pollo" || producto === "cerdo" || producto === "vacuno")) {
        break;
      } else if (categoria === "lacteos" && (producto === "leche" || producto === "yogurt")) {
        break;
      } else if (categoria === "ferreteria" && (producto === "pintura" || producto === "lijas" || producto === "tornillos")) {
        break;
      } else if (categoria === "despensa" && (producto === "arroz" || producto === "tallarines" || producto === "cafe" || producto === "azucar")) {
        break;
      }
    }
  }

  if (!producto) {
    alert("Producto no válido.");
    continue;
  }
  let cantidad;
if (producto === "leche" || producto === "pintura" ) {
cantidad = parseFloat(prompt("Cantidad en litros de "+producto+" :"));
} else if (producto === "yogurt" || producto === "lijas" || producto === "tornillos" || producto === "cafe") {
cantidad = parseInt(prompt("Cantidad en unidades de "+producto+ " :"));
} else {
cantidad = parseFloat(prompt("Cantidad en kilogramos de "+producto+ " :"));
}
 
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad no válida.");
    continue;
  }

  const precioTotal = calcularPrecioTotal(producto, cantidad);
//validamos producto para mostrar unidad de medida correspondiente para resumen de compra
if(producto === "leche" || producto === "pintura"){
  alert("Resumen de compra:\n"+cantidad+" litros de "+producto+ "- Precio total: $ "+precioTotal)
}else if(producto === "yogurt"  || producto === "lijas" || producto === "tornillos" || producto === "cafe"){
  alert("Resumen de compra:\n"+cantidad+" unidades de "+producto+ "- Precio total: $ "+precioTotal)
}else{
  alert("Resumen de compra:\n"+cantidad+"Kg de "+producto+ "- Precio total: $ "+precioTotal)
}

// validamos producto para mostar  unidad de medida correspondiente a carrito de compra 
if(producto === "leche" || producto === "pintura"){
carrito+= "("+cantidad+" litros) "+producto+ " de "+categoria+"- Precio total: $ "+precioTotal+"\n"
}else if(producto === "yogurt"  || producto === "lijas" || producto === "tornillos" || producto === "cafe"){
  carrito+= "("+cantidad+" unidades) "+producto+ " de "+categoria+"- Precio total: $ "+precioTotal+"\n"
}else{
  carrito+= "("+cantidad+" Kg) "+producto+ " de "+categoria+"- Precio total: $ "+precioTotal+"\n"
}


totalCompra += precioTotal; // Actualizar el total de la compra
  const respuesta = prompt("¿Quieres continuar comprando? (s/n)").toLowerCase();
  if (respuesta === 'n') {
    pagar(); // Llamar a la función de pago cuando el usuario diga "n"
    break;
  }
}
}
//Funcion que permite pagar al usuario
function pagar() {
if (carrito !== "") {
  alert("Detalle de la compra:\n"+carrito+"\nTotal a pagar: $"+totalCompra);
} else {
  alert("No se realizaron compras.");
}
}
// Llamada a la función menu 
menu();
}
