function bubbleSort(arr) {
  var contador = 1;

  while (contador != 0) {
    contador = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        contador = swap(arr, i, contador);
      }
    }
  }

  return arr;
}

function swap(arr, i, contador) {
  let contenedor = arr[i + 1];
  arr[i + 1] = arr[i];
  arr[i] = contenedor;
  contador++;
  return contador;
}

// source code 📍
const lollipop = {};
lollipop.lick = function () {
  return "licked";
};
lollipop.getToCenter = function () {
  this.lick();
  this.lick();
  this.lick();
  return "got to center";
};
