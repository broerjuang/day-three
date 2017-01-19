// @flow

import type {Product} from './createProduct';

export default function findProduct(products: Array<Product>, name: string) {
  if (products.length === 0) {
    return {};
  }
  for (let product of products) {
    if (product.name === name) {
      return {
        ...product,
      };
    }
  }
  return {};
}
