const estudiantes = [
    { nombre: "Carlos", notas: [80, 75, 90] },
    { nombre: "María", notas: [60, 65, 70] },
    { nombre: "Pedro", notas: [50, 30, 40] }
  ];
  
  const estudiantesConPromedio = estudiantes.map(estudiante => {
    const promedio = estudiante.notas.reduce((sum, nota) => sum + nota, 0) / estudiante.notas.length;
    return {
      ...estudiante,
      promedio: Math.round(promedio),
      aprobado: promedio >= 70
    };
  });
  
  const palabras = ["javascript", "map", "filter", "reduce"];

const vocalesPorPalabra = palabras.map(palabra => {
  const vocales = palabra.match(/[aeiou]/gi) || []; // Extrae vocales (case-insensitive)
  return {
    palabra,
    vocales: vocales.join(''),
    total: vocales.length
  };
});
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Mouse", precio: 30 },
    { id: 3, nombre: "Teclado", precio: 60 }
  ];
  
  const productosConDescuento = productos.map(producto => {
    const tieneDescuento = producto.precio > 50;
    return {
      ...producto,
      precio: tieneDescuento ? producto.precio * 0.9 : producto.precio,
      descuentoAplicado: tieneDescuento
    };
  });
  
  console.log(productosConDescuento);

console.log(vocalesPorPalabra);
  console.log(estudiantesConPromedio);