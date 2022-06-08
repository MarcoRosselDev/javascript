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

//--------------------------------------------------------
/*que pasa si ahora quiero agregarle una nueva propiedad a mi objeto
pero no quiero alterar el array original

solo agregar un nuevo atributo a cada uno de los objetos

la respuesta a los braquet {} que no me funcionaban era por que es para cuando nesecitamos más espacio, en ese caso usaremos un retorn con lo que queremos de vuelta.
en caso de que este todo en una linea no esamos braquets y tmpoco usamos return.
*/