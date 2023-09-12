import FormaGeometrica from "./FormaGeometrica";

export class Triangulo implements FormaGeometrica {
  
    constructor(private base: number, private altura: number) {}
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  
    calcularPerimetro() {
      // En un triángulo genérico, necesitarías conocer los lados para calcular el perímetro.
      // Aquí, asumimos un triángulo rectángulo para simplificar.
      const hipotenusa = Math.sqrt(this.base ** 2 + this.altura ** 2);
      return this.base + this.altura + hipotenusa;
    }
  }