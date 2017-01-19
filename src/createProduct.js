// @flow

export type Product = {
  id?: string;
  name: string;
  price: number;
};


export default function createProduct(name: string, price: number): Product {
  return {
    id: String(Math.random()),
    name,
    price,
  };
}
