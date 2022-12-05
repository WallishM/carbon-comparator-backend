import {transportItfc} from './transportModel_Itfc';
import { TransportData, Address } from './transportModel_Type';
import * as dotenv from 'dotenv';
const fetch = require ('node-fetch');

dotenv.config();

export class Bike implements transportItfc{

    private keyAPI = process.env.KEY_API_GEOAPIFY;

    private transportData :TransportData = {
        start:{
            address:'',
            zipCode:'',
            city:'',
            country:'',
            lat:0,
            long:0
        },
        end: {
            address:'',
            zipCode:'',
            city:'',
            country:'',
            lat:0,
            long:0
        },
        date: new Date(),
        waypoint: [],
        duration: 0,
        distance: 0,
        price: 0,
        carbon: 0,
        toll: false
    };

    constructor(startAdress:Address, endAdress:Address, date:Date){
        
        this.transportData.start = startAdress;
        this.transportData.end = endAdress;
        this.transportData.date = date;
    }

    getCarbonPrint(){
        return this.transportData.carbon;
    }

    getTransportData(){
        return this.transportData;
    }

    async getRoutingData(){
        await fetch(`https://api.geoapify.com/v1/routing?waypoints=${ this.transportData.start.lat},${this.transportData.start.long}|${this.transportData.end.lat},${this.transportData.end.long}&mode=bicycle&apiKey=${this.keyAPI}`)
        .then((res:any) => res.json())
        .then((data:any) => {
            this.transportData.distance = data['features'][0]['properties']['distance'];
            this.transportData.duration = data['features'][0]['properties']['time'];
            this.transportData.toll = data['features'][0]['properties']['toll'];
        }).catch((err:Error) => console.log(err));
    }

    private caculateCarbonPrint(){

    }
}

