
class Libro {
    private titulo: string;
    private autor: string;
    private prestado: boolean;
  
    constructor(titulo: string, autor: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.prestado = false;
    }
  
    prestar() {
      if (!this.prestado) {
        this.prestado = true;
      }
    }
  
    devolver() {
      if (this.prestado) {
        this.prestado = false;
      }
    }
  
    estaPrestado() {
      return this.prestado;
    }
  
    getInfo() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Prestado: ${this.prestado ? 'Sí' : 'No'}`;
    }
  }
  
  export default Libro;
  