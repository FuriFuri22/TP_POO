import FormaGeometrica from "./FormaGeometrica";

export class Circulo implements FormaGeometrica {

  
    constructor(private radio: number) {}
  
    calcularArea() {
      return Math.PI * this.radio **2;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }