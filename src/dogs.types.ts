export enum ImageAddresses {
    dog1 = '/images/doggo-1.jpg',
    dog2 = '/images/doggo-2.jpg',
    dog3 = '/images/doggo-3.jpg',
    dog4 = '/images/doggo-4.jpg',
    dog5 = '/images/doggo-5.jpg',
}

export interface IDog {
    dogName: string;
    dogRace: string;
    dogImage: ImageAddresses | string;
    dogId: number
}