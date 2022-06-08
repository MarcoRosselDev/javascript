const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

//   lo que quiero es sacar x datos en este caso los totales para agregarlos a un nuevo array, que ahora sera solo de numeros.

const repuesta = orders.map(item => item.total)

console.log(orders);
console.log(repuesta);

//cuando use las {} me salia undefined en respuesta. ????