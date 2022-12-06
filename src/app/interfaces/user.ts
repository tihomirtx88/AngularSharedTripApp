export interface IUser {
    _id: string;
    email: string;
    hashedPassword: string;
    gender: string;
    trips: string[];
    accessToken: string;
}