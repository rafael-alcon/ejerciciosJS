function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`Tu IMC es: ${imc.toFixed(2)}`);
    
    if (imc < 18.5) {
      console.log("Categoría: Bajo peso");
    } else if (imc < 25) {
      console.log("Categoría: Peso normal");
    } else if (imc < 30) {
      console.log("Categoría: Sobrepeso");
    } else {
      console.log("Categoría: Obesidad");
    }
  }
  
  calcularIMC(70, 1.75); // Ejemplo: 70kg y 1.75m