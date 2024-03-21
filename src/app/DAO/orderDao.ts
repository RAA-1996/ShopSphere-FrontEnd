import { NameDao } from './nameDao';
import { AddressDao } from './addressDao';
import { ProductDao } from './productDao';
import { NewProductEntity } from '../ENTITY/newProductEntity';

export interface OrderDao {
  userId: number;
  username: string;
  email: string;
  name: NameDao;
  address: AddressDao;
  mobile: string;
  role: string;
  productList: ProductDao[];
  // productList:NewProductEntity[];
}
