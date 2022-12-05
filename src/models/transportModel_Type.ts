export type TransportData  = {
    start:Address,
    end: Address,
    date: Date,
    waypoint: Address[],
    duration: Number,
    distance: Number,
    price: Number,
    carbon: Number,
    toll: boolean
};

export type Address = {
    address:string,
    zipCode:string,
    city:string,
    country:string,
    lat:Number,
    long:Number
};