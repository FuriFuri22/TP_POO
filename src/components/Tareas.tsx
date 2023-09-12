import {useState} from "react";

import Tarea from "../middlewares/tareas";

function Tareas () {

    const [tareas, setTareas] = useState<Tarea[]>([]);
    const [nombreTarea, setNombreTarea] = useState<string>('');
    const [descripcionTarea, setDescripcionTarea] = useState<string>('');
    const [fechaVencimiento, setFechaVencimiento] = useState<string>('');

    const agregarTarea = () =>{

        if(nombreTarea && fechaVencimiento){
            const nuevaTarea = new Tarea(nombreTarea,
                descripcionTarea ,
                new Date(fechaVencimiento));

            setTareas([...tareas, nuevaTarea]);
            setNombreTarea('');
            setDescripcionTarea('');
            setFechaVencimiento('');
         
        }
    };

    const completarTarea = (index: number) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completar();
        setTareas(nuevasTareas);
      };

      const eliminarTarea = (index: number) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
      };


      return (
        <div>
          <h1>Lista de Tareas</h1>
          <div>
            <input
              type="text"
              placeholder="Nombre de la tarea"
              value={nombreTarea}
              onChange={(e) => setNombreTarea(e.target.value)}
            />
             <input
                type="text"
                placeholder="Descripción de la tarea"
                value={descripcionTarea}
                onChange={(e) => setDescripcionTarea(e.target.value)}
                />
            <input
              type="date"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
            />
            <button onClick={agregarTarea}>Agregar Tarea</button>
          </div>
          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>
                {tarea.nombre} - {tarea.fechaVencimiento.toDateString()}{' '}
                {tarea.completada ? '(Completada)' : ''}
                <br />
                Descripción: {tarea.descripcion}
                <button onClick={() => completarTarea(index)}>Completar</button>
                <button onClick={() => eliminarTarea(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      );


}


export default Tareas