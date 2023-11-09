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

function seleccionarAutosParaComparar() {
  let seleccionados = [];
  let seguirSeleccionando = true;

  while (seguirSeleccionando) {
    let codigo = parseInt(prompt("Selecciona el código del vehículo que deseas comparar (0 para dejar de seleccionar):"));

    if (codigo === 0) {
      seguirSeleccionando = false;
    } else {
      let auto = autos.find((a) => a.CODIGO === codigo);

      if (auto) {
        seleccionados.push(auto);
        console.log("Auto seleccionado:", auto);
      } else {
        alert("Código de vehículo incorrecto o no válido.⛔");
        console.warn("Código de vehículo incorrecto o no válido.");
      }
    }
  }
  console.table(seleccionados);
  return seleccionados;
}

function compararVehiculosSeleccionados(precio) {
  const autosFiltrados = autosSeleccionados.filter((auto) => auto.PRECIO <= precio);
  return autosFiltrados;

  console.log("Autos Seleccionados Comparados:", autosComparados);  
}

function cotizar() {
  let verAutos = confirm("¿Deseas ver los autos en venta?");
  if (verAutos) {
    mostrarAutosEnVenta();
  }

  let autosAComparar = seleccionarAutosParaComparar();

  if (autosAComparar.length > 0) {
    autosSeleccionados.push(...autosAComparar);

    console.log("Autos Seleccionados:", autosSeleccionados);

    let cuotas = parseInt(prompt("¿En cuántas cuotas deseas financiar? (hasta 48 cuotas con interés del 80%)"));

    if (cuotas > 0 && cuotas <= 48) {
      autosAComparar.forEach(auto => {
        const montoCuota = calcularCuotas(auto, cuotas);
        alert(`El monto de cada cuota para ${auto.MARCA} ${auto.MODELO} será de $${montoCuota} para ${cuotas} cuotas.`);
      });
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

// Se llama a la función iniciarCotizacion para comenzar el proceso
iniciarCotizacion();