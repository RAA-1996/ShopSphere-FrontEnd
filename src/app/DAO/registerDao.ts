import { AddressDao } from "./addressDao";
import { NameDao } from "./nameDao";

export interface RegisterDao {
  username: string;
  email: string;
  password: string;
  name: NameDao;
  address: AddressDao;
  mobile: string;
  role: string;
}
