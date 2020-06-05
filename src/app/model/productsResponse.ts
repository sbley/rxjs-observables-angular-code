import { Product } from './product';

export interface ProductsResponse {
  // other hypermedia properties

  products: Product[];
}
