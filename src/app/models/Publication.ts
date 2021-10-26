import { User } from './User';

export interface Publication {
  id: number,
  descripcion: string,
  categoria_id: number,
  cantidad_tiempo: number,
  unidad_tiempo: string,
  precio: number,
  fecha_limite: string,
  ver_todos: boolean,
  user_id: number,
  es_necesidad: boolean,
  foto: string,
  activa: boolean,
  createdAt: string,
  updatedAt: string,
  user: User,
  categoria: {
      id: number,
      nombre: string,
  }
}

export interface PublicationPageInfo {
  totalItems: number,
  registros: Publication[],
  totalPages: number,
  currentPage: number,
}
