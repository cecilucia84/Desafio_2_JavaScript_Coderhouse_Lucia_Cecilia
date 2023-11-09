const autos = [
  { CODIGO: 1, MARCA: 'Renault', MODELO: 'Stepway', ANIO: 2017, PRECIO: 5500000 },
  { CODIGO: 2, MARCA: 'Fiat', MODELO: 'Chronos', ANIO: 2019, PRECIO: 6600000 },
  { CODIGO: 3, MARCA: 'Chevrolet', MODELO: 'Corsa', ANIO: 2013, PRECIO: 4500000 },
  { CODIGO: 4, MARCA: 'Nissan', MODELO: 'Versa', ANIO: 2016, PRECIO: 5000000 },
  { CODIGO: 5, MARCA: 'Peugeot', MODELO: '207', ANIO: 2015, PRECIO: 4500000 },
  { CODIGO: 6, MARCA: 'Volkswagen', MODELO: 'Bora', ANIO: 2018, PRECIO: 6400000 },
  { CODIGO: 7, MARCA: 'Ford', MODELO: 'Fiesta', ANIO: 2017, PRECIO: 5700000 },
  { CODIGO: 8, MARCA: 'Citroen', MODELO: 'Berlingo', ANIO: 2020, PRECIO: 6900000 },
]

const autosSeleccionados = [];

function mostrarAutosEnVenta() {
  alert("Autos en venta:");
  for (let i = 0; i < autos.length; i++) {
    const auto = autos[i];
    alert(`Código: ${auto.CODIGO}, Marca: ${auto.MARCA}, Modelo: ${auto.MODELO}, Año: ${auto.ANIO}, Precio: $${auto.PRECIO}`);
  }
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
  if (verAutos) {
    mostrarAutosEnVenta();
  }

  let codigo = parseInt(prompt("Selecciona el código del vehículo que deseas financiar:"));
  let autoAComprar = autos.find((auto) => auto.CODIGO === codigo);

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
    realizarCotizacion = confirm("¿Deseas realizar otra cotización?");
  }
  alert("Gracias por hacer tu cotización en TU AUTO!");
}


// Llamando a la función iniciarCotizacion para comenzar el proceso
iniciarCotizacion();