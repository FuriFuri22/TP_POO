import { useState } from "react";
import { Contacto } from "../middlewares/contactos/Contactos";
import { IContacto } from "../middlewares/contactos/IContactos";

function ContactosApp() {
  const [contactos, setContactos] = useState<IContacto[]>([]);
  const [nuevoContacto, setNuevoContacto] = useState<IContacto>({
    id: 0,
    nombre: "",
    correo: "",
    telefono: "",
  });
  const [resultadoBusqueda, setResultadoBusqueda] = useState<IContacto[]>([]);


  const agregarContacto = () => {
    if (nuevoContacto.nombre && nuevoContacto.correo && nuevoContacto.telefono) {
      const id = contactos.length + 1;
      const contacto = new Contacto(
        id,
        nuevoContacto.nombre,
        nuevoContacto.correo,
        nuevoContacto.telefono
      );
      setContactos([...contactos, contacto]);
      setNuevoContacto({ id: 0, nombre: "", correo: "", telefono: "" });
    }
  };

  const buscarContacto = (nombre: string) => {
    const resultados = contactos.filter((contacto) =>
      contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    setResultadoBusqueda(resultados);
  };
  

  return (
    <div>
      <h1>Gestión de Contactos</h1>
      <div>
        <h2>Agregar Contacto</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoContacto.nombre}
          onChange={(e) =>
            setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          value={nuevoContacto.correo}
          onChange={(e) =>
            setNuevoContacto({ ...nuevoContacto, correo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={nuevoContacto.telefono}
          onChange={(e) =>
            setNuevoContacto({ ...nuevoContacto, telefono: e.target.value })
          }
        />
        <button onClick={agregarContacto}>Agregar</button>
      </div>
      
      <div>
        <h2>Lista de Contactos</h2>
        <ul>
          {contactos.map((contacto) => (
            <li key={contacto.id}>
              <strong>{contacto.nombre}</strong>
              <p>Correo: {contacto.correo}</p>
              <p>Teléfono: {contacto.telefono}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Buscar Contacto</h2>
        <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => buscarContacto(e.target.value)}
        />
            <button>Buscar</button>
            </div>
            <div>
            <h2>Resultados de la Búsqueda</h2>
            <ul>
                {resultadoBusqueda.map((contacto) => (
                <li key={contacto.id}>
                    <strong>{contacto.nombre}</strong>
                    <p>Correo: {contacto.correo}</p>
                    <p>Teléfono: {contacto.telefono}</p>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default ContactosApp;