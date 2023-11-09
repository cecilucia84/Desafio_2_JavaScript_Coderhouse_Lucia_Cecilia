class Autos_Venta {
  constructor(codigo, marca, modelo, anio, precio) {
    this.CODIGO = codigo;
    this.MARCA = marca;
    this.MODELO = modelo;
    this.ANIO = anio;
    this.PRECIO = precio;
  }
}

const autos = [
  new Autos_Venta(1, 'Renault', 'Stepway', 2017, 5500000),
  new Autos_Venta(2, 'Fiat', 'Chronos', 2019, 6600000),
  new Autos_Venta(3, 'Chevrolet', 'Corsa', 2013, 4500000),
  new Autos_Venta(4, 'Nissan', 'Versa', 2016, 5000000),
  new Autos_Venta(5, 'Peugeot', '207', 2015, 4500000),
  new Autos_Venta(6, 'Volkswagen', 'Bora', 2018, 6400000),
  new Autos_Venta(7, 'Ford', 'Fiesta', 2017, 5700000),
  new Autos_Venta(8, 'Citroen', 'Berlingo', 2020, 6900000)
];

const autosSeleccionados = [];

function mostrarAutosEnVenta() {
  alert("Autos en venta:");
  for (let i = 0; i < autos.length; i++) {
    const auto = autos[i];
    alert(`Código: ${auto.CODIGO}, Marca: ${auto.MARCA}, Modelo: ${auto.MODELO}, Año: ${auto.ANIO}, Precio: $${auto.PRECIO}`);}
  console.table(autos);
}

function calcularCuotas(auto, cuotas) {
  const precioTotal = auto.PRECIO;
  const interes = 0.80;
  const precioConInteres = precioTotal + (precioTotal * interes);
  const montoCuota = (precioConInteres / cuotas).toFixed(2);
  return montoCuota;
}

function cotizar() {
  let verAutos = confirm("¿Deseas ver los autos en venta?");
  if (verAutos) { mostrarAutosEnVenta();}

  let codigo = parseInt(prompt("Selecciona el código del vehículo que deseas financiar:"));
  let autoAComprar = autos.find((auto) => auto.CODIGO === codigo);

  if (isNaN(codigo) || autoAComprar === undefined) {
    alert ("Código de vehículo incorrecto o no válido.⛔");
    console.warn("Código de vehículo incorrecto o no válido.");
  } 

  if (autoAComprar) {
    autosSeleccionados.push(autoAComprar);

    console.log("Autos Seleccionados:", autosSeleccionados);

    let cuotas = parseInt(prompt(`Has seleccionado el siguiente vehículo:\n${autoAComprar.MARCA} ${autoAComprar.MODELO} (${autoAComprar.ANIO}) con un precio de $${autoAComprar.PRECIO}.\n¿Deseas conocer nuestro plan de financiación?\n¿En cuántas cuotas deseas financiar? (hasta 48 cuotas con interés del 80%)`));

    if (cuotas > 0 && cuotas <= 48) {
      const montoCuota = calcularCuotas(autoAComprar, cuotas);
      alert(`El monto de cada cuota será de $${montoCuota} para ${cuotas} cuotas.`);

      let cuotasDetalle = "";
      for (let i = 1; i <= cuotas; i++) {
        cuotasDetalle += `Cuota ${i}: $${montoCuota}\n`;
 }
      alert("Detalle de Cuotas:\n" + cuotasDetalle);
      console.log (cuotasDetalle)
    } else {
      alert("⛔️ La cantidad de cuotas ingresada no es válida.");
    }
  }
}

function iniciarCotizacion() {

  let realizarCotizacion = true;
  while (realizarCotizacion) {
  cotizar();
  realizarCotizacion = confirm("¿Deseas realizar otra cotización?");}
  alert("Gracias por hacer tu cotización en TU AUTO!");
}


// Se llama a la función iniciarCotizacion para comenzar el proceso
iniciarCotizacion();