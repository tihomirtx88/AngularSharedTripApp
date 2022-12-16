import { ITrip } from "./interfaces/trip";
import { mockUser } from "./MOCK_USER";


export const mockTrip: ITrip = {
    _id: "63458f513df783a3b31e64da",
    start: "Varna",
    end: "Larnaka",
    date: "18.02.1988",
    time: "22:00",
    carImg: "https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/1:1/w_2000,h_2000,c_limit/Roadtrip-2020-GettyImages-1151192650.jpg",
    carBrand: "trabant",
    seats: 1,
    price: 20,
    description: "nice trip to larnaka yehoooo",
    owner: mockUser,
    buddies: [`6340273dd531bdab275aaaa7`]
}