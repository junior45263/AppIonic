export interface Product {
  _id: string;
  name: string;
  code: string;
  price: number;
  amount: number;
  status: string;
  category?: string; // Campo opcional para la categoría del producto
  description?: string; // Campo opcional para la descripción del producto
  creationDate?: Date;
}
