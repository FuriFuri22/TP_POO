import FormaGeometrica from "./FormaGeometrica";

export class Rectangulo implements FormaGeometrica {

    constructor(private base: number, private altura: number) { }
 
   calcularArea() {
     return this.base * this.altura;
   }
 
   calcularPerimetro() {
     return 2 * (this.base + this.altura);
   }
 }