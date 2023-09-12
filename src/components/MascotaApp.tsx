import { useEffect, useState} from "react";
import { IMascota } from "../middlewares/mascota/IMascota.tsx";
import Mascota from "../middlewares/mascota/mascota.tsx";


function MascotaApp() {
  const [mascota, setMascota] = useState<IMascota | null>(null);
  const [nuevoNombre, setNuevoNombre] = useState<string>("");
  const [nuevaRaza, setNuevaRaza] = useState<string>("");
 

  const crearMascota = () => {
    if (nuevoNombre && nuevaRaza) {
      const nuevaMascota = new Mascota(nuevoNombre, nuevaRaza);
     
      setMascota(nuevaMascota);
      setNuevoNombre("");
      setNuevaRaza("");
      nuevaMascota.disminuirFelicidadPeriodicamente();
    }
  };

  const alimentarMascota = () => {
    if (mascota) {
      mascota.alimentar();
      setMascota({ ...mascota }); 
    }
  };

  const jugarConMascota = () => {
    if (mascota) {
      mascota.jugar();
      setMascota({ ...mascota }); 
    }
  };

  const cuidarMascota = () => {
    if (mascota) {
      mascota.cuidar();
      setMascota({ ...mascota }); 
    }
  };

  useEffect(()=>{

  }, [mascota])

  return (
    <div>
      <h1>Mascota Virtual</h1>
      {!mascota ? (
        <div>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Raza de la mascota"
            value={nuevaRaza}
            onChange={(e) => setNuevaRaza(e.target.value)}
          />
          <button onClick={crearMascota}>Crear Mascota</button>
        </div>
      ) : (
        <div>
          <p>Nombre: {mascota.nombre}</p>
          <p>Raza: {mascota.raza}</p>
          <p>Estado: {mascota.estado}</p>
          <p>Nivel de Felicidad: {mascota.nivelFelicidad}</p>
          <button onClick={alimentarMascota}>Alimentar</button>
          <button onClick={jugarConMascota}>Jugar</button>
          <button onClick={cuidarMascota}>Cuidar</button>
        </div>
      )}
    </div>
  );
}

export default MascotaApp;
