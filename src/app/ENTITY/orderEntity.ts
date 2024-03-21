import { AddressDao } from '../DAO/addressDao';
import { NameDao } from '../DAO/nameDao';
import { ProductDao } from '../DAO/productDao';

export interface OrderEntity {
  orderId: number;
  userId: number;
  username: string;
  email: string;
  name: NameDao;
  address: AddressDao;
  mobile: string;
  role: string;
  productList: ProductDao[];
}
