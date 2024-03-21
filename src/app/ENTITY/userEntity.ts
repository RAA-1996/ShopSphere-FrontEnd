import { AddressDao } from "../DAO/addressDao";
import { NameDao } from "../DAO/nameDao";

export interface UserEntity{
    userId:number;
    username: string;
    email: string;
    password: string;
    name: NameDao;
    address: AddressDao;
    mobile: string;
    role: string;
}