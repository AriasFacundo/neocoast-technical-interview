function groupItemsByDate(data) {
  // Utilizamos reduce para para agrupar por mes/año
  return data.reduce((accumulator, currentValue) => {
    // Formateamos la fecha para obtener el mes/año en formato MM/YYYY
    const monthYear = `${String(currentValue.date.getMonth() + 1).padStart(
      2,
      "0"
    )}/${currentValue.date.getFullYear()}`;

    // Chequeamos si el mes/año no existe, entonces inicializamos un array vacío
    if (!accumulator[monthYear]) {
      accumulator[monthYear] = [];
    }

    // Agregamos los items al mes/año correspondiente
    accumulator[monthYear].push(...currentValue.items);

    // Ordenamos los items del grupo por fecha ascendente
    accumulator[monthYear].sort((a, b) => new Date(a.date) - new Date(b.date));

    return accumulator;
  }, {});
}

// Data de ejemplo:
const data = [
  {
    date: new Date("2024-12-04"),
    items: [
      { name: "test", value: 1 },
      { name: "test2", value: 2 },
    ],
  },
  {
    date: new Date("2024-12-04"),
    items: [{ name: "test3", value: 3 }],
  },
  {
    date: new Date("2024-12-06"),
    items: [{ name: "test4", value: 4 }, , { name: "test5", value: 5 }],
  },
  {
    date: new Date("2024-11-06"),
    items: [
      { name: "test6", value: 6 },
      { name: "test7", value: 7 },
    ],
  },
];

// Ejemplo de uso
groupItemsByDate(data);

console.log(groupItemsByDate(data));
