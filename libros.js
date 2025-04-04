// ===== 📚 BASE DE DATOS DE LIBROS =====
const biblioteca = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, disponible: true },
    { id: 2, titulo: "1984", autor: "George Orwell", año: 1949, disponible: false },
    { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, disponible: true },
];

// ===== 📖 FUNCIONES PRINCIPALES =====

// 1. Añadir un nuevo libro
function agregarLibro(titulo, autor, año) {
    const nuevoId = biblioteca.length > 0 ? biblioteca[biblioteca.length - 1].id + 1 : 1;
    const nuevoLibro = { id: nuevoId, titulo, autor, año, disponible: true };
    biblioteca.push(nuevoLibro);
    console.log(`✅ Libro añadido: "${titulo}" (ID: ${nuevoId})`);
}

// 2. Buscar libros por título o autor
function buscarLibros(textoBusqueda) {
    const resultados = biblioteca.filter(libro => 
        libro.titulo.toLowerCase().includes(textoBusqueda.toLowerCase()) || 
        libro.autor.toLowerCase().includes(textoBusqueda.toLowerCase())
    );

    if (resultados.length === 0) {
        console.log("🔍 No se encontraron libros con ese criterio.");
    } else {
        console.log("📚 Resultados de búsqueda:");
        resultados.forEach(libro => {
            console.log(`- ${libro.titulo} (${libro.autor}) - ${libro.disponible ? "Disponible" : "Prestado"}`);
        });
    }
}

// 3. Prestar un libro (marcar como no disponible)
function prestarLibro(id) {
    const libro = biblioteca.find(libro => libro.id === id);
    if (!libro) {
        console.log("❌ Libro no encontrado.");
    } else if (!libro.disponible) {
        console.log("⚠️ El libro ya está prestado.");
    } else {
        libro.disponible = false;
        console.log(`📖 Libro prestado: "${libro.titulo}"`);
    }
}

// 4. Devolver un libro (marcar como disponible)
function devolverLibro(id) {
    const libro = biblioteca.find(libro => libro.id === id);
    if (!libro) {
        console.log("❌ Libro no encontrado.");
    } else if (libro.disponible) {
        console.log("ℹ️ Este libro ya estaba disponible.");
    } else {
        libro.disponible = true;
        console.log(`📗 Libro devuelto: "${libro.titulo}"`);
    }
}

// 5. Eliminar un libro por ID
function eliminarLibro(id) {
    const indice = biblioteca.findIndex(libro => libro.id === id);
    if (indice === -1) {
        console.log("❌ Libro no encontrado.");
    } else {
        const libroEliminado = biblioteca.splice(indice, 1)[0];
        console.log(`🗑️ Libro eliminado: "${libroEliminado.titulo}"`);
    }
}

// 6. Mostrar estadísticas
function mostrarEstadisticas() {
    const totalLibros = biblioteca.length;
    const disponibles = biblioteca.filter(libro => libro.disponible).length;
    const prestados = totalLibros - disponibles;

    console.log("📊 Estadísticas de la biblioteca:");
    console.log(`- Total de libros: ${totalLibros}`);
    console.log(`- Disponibles: ${disponibles}`);
    console.log(`- Prestados: ${prestados}`);
}

// ===== 🚀 EJECUCIÓN DE PRUEBAS =====
console.log("===== 📚 BIBLIOTECA VIRTUAL =====");

// Agregar nuevos libros
agregarLibro("El Hobbit", "J.R.R. Tolkien", 1937);
agregarLibro("Fahrenheit 451", "Ray Bradbury", 1953);

// Buscar libros
buscarLibros("orwell");
buscarLibros("principito");

// Prestar y devolver libros
prestarLibro(1);
prestarLibro(4);
devolverLibro(2);

// Eliminar un libro
eliminarLibro(3);

// Mostrar estadísticas
mostrarEstadisticas();

// Mostrar el estado final de la biblioteca
console.log("===== 📋 LISTA COMPLETA DE LIBROS =====");
console.log(biblioteca);