export interface IMascota {
    nombre: string;
    raza: string;
    nivelFelicidad: number;
    estado: string;
    alimentar: () => void;
    jugar: () => void;
    cuidar: () => void;
  }
  