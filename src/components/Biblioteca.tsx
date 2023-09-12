
import { useState } from 'react';
import Libro from '../middlewares/libros.tsx';

function Biblioteca() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [nuevoLibroTitulo, setNuevoLibroTitulo] = useState<string>('');
  const [nuevoLibroAutor, setNuevoLibroAutor] = useState<string>('');

  const agregarLibro = () => {
    const nuevoLibro = new Libro('Título del Libro', 'Autor del Libro');
    setLibros([...libros, nuevoLibro]);
    setNuevoLibroTitulo('');
    setNuevoLibroAutor('');
  };

  const prestarLibro = (index: number) => {
    const copiaLibros = [...libros];
    copiaLibros[index].prestar();
    setLibros(copiaLibros);
  };

  const devolverLibro = (index: number) => {
    const copiaLibros = [...libros];
    copiaLibros[index].devolver();
    setLibros(copiaLibros);
  };

  return (
    <div>
      <h1>Biblioteca Virtual</h1>

      <div>
        <input
          type="text"
          placeholder="Título del Libro"
          value={nuevoLibroTitulo}
          onChange={(e) => setNuevoLibroTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor del Libro"
          value={nuevoLibroAutor}
          onChange={(e) => setNuevoLibroAutor(e.target.value)}
        />
        <button onClick={agregarLibro}>Agregar Libro</button>
      </div>
      <ul>
        {libros.map((libro, index) => (
          <li key={index}>
            {libro.getInfo()}{' '}
            <button onClick={() => prestarLibro(index)}>Prestar</button>{' '}
            <button onClick={() => devolverLibro(index)}>Devolver</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Biblioteca;
