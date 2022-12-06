import { IUser } from "./user";


export interface ITrip {
    _id: string;
    start: string;
    end: string;
    date: string;
    time: string;
    carImg: string;
    carBrand: string;
    seats: number;
    price: number;
    description: string;
    owner: IUser;
    buddies: string[];
}