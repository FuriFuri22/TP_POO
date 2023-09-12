import { IMascota } from "./IMascota";

class Mascota implements IMascota {
  nombre: string;
  raza: string;
  nivelFelicidad: number;
  estado: string;

  constructor(nombre: string, raza: string) {
    this.nombre = nombre;
    this.raza = raza;
    this.nivelFelicidad = 50;
    this.estado = "neutro";
  }

  estados() {
    if (this.nivelFelicidad > 75) {
      this.estado = "Feliz";
    } else if (this.nivelFelicidad > 50) {
      this.estado = "Contento";
    } else if(this.nivelFelicidad == 50){
      this.estado = "Neutro";
      }else if(this.nivelFelicidad <= 0){
           this.estado = "Esta mascota ha muerto por depresion"
      }else{
          this.estado= "Triste" ;
    }
  }

  alimentar() {
    this.nivelFelicidad += 10;
    this.estados();
  }

  jugar() {
    this.nivelFelicidad += 20;
    this.estados();
  }

  cuidar() {
    this.nivelFelicidad += 5;
    this.estados();
  }

  disminuirFelicidadPeriodicamente() {
    setInterval(() => {
      if (this.nivelFelicidad > 0) {
        this.nivelFelicidad -= 5; // Disminuye gradualmente
        this.estados();
      }
    }, 1000); // Disminuye cada segundo (ajusta según lo necesites)
  }


}

export default Mascota;

 /* estados() {
      
    if (this.nivelFelicidad > 75) {
      this.estado = "Feliz";
    } else if (this.nivelFelicidad > 50) {
      this.estado = "Contento";
    } else if(this.nivelFelicidad == 50){
      this.estado = "Neutro";
      }else{
          this.estado= "Triste" ;
    }
  }*/