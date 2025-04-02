class GestorTareas {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(descripcion, prioridad = 'media') {
      const tarea = {
        id: Date.now(),
        descripcion,
        prioridad,
        completada: false,
        fechaCreacion: new Date().toISOString(),
      };
      this.tareas.push(tarea);
      console.log(`✅ Tarea agregada: "${descripcion}" (Prioridad: ${prioridad})`);
    }
  
    completarTarea(id) {
      const tarea = this.tareas.find(t => t.id === id);
      if (tarea) {
        tarea.completada = true;
        console.log(`✔ Tarea completada: "${tarea.descripcion}"`);
      } else {
        console.log("❌ Tarea no encontrada");
      }
    }
  
    listarTareas() {
      console.log("\n📋 Lista de Tareas:");
      this.tareas.forEach(t => {
        const estado = t.completada ? "✓" : "✗";
        console.log(`[${estado}] ${t.descripcion} (Prioridad: ${t.prioridad})`);
      });
    }
  
    filtrarTareasPorPrioridad(prioridad) {
      const filtradas = this.tareas.filter(t => t.prioridad === prioridad);
      console.log(`\n🔍 Tareas con prioridad "${prioridad}":`);
      filtradas.forEach(t => console.log(`- ${t.descripcion}`));
    }
  }
  
  // Uso del sistema
  const gestor = new GestorTareas();
  gestor.agregarTarea("Aprender JavaScript", "alta");
  gestor.agregarTarea("Hacer ejercicio", "media");
  gestor.agregarTarea("Leer un libro", "baja");
  gestor.listarTareas();
  gestor.completarTarea(gestor.tareas[0].id);
  gestor.filtrarTareasPorPrioridad("alta");