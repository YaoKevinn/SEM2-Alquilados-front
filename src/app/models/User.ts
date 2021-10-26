export interface User {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  fecha_nacimiento: string;
  telefono: string;
  latitud: number;
  longitud: number;
  is_empresa: boolean;
  token: string;
  calificaciones?: Qualification[];
  friends?: Friend[];
  promedio?: number;
}

export interface Qualification {
  id: number;
  comentarios: string;
  user_id: string;
  calificacion: number;
}

export interface Friend {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  fecha_nacimiento: string;
  telefono: string;
  latitud: number;
  longitud: number;
  is_empresa: boolean;
  token: string;
  users_friends: {
    user_id: number;
    friend_id: number;
  }
}

