
class Tarea {
    nombre: string;
    descripcion: string;
    fechaVencimiento: Date;
    completada: boolean;

    constructor( nombre: string, descripcion: string,  fechaVencimiento: Date) {

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaVencimiento= fechaVencimiento;
        this.completada = false;
    }

    completar(){

        this.completada = true;
    }
}

export default Tarea