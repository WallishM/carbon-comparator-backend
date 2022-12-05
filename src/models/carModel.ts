import {transportItfc} from './transportModel_Itfc';
import { TransportData, Address } from './transportModel_Type';
const fetch = require ('node-fetch');

export class Car implements transportItfc{

    private  dataFile = process.env.dataCarbonFile || '../public/dataCarbonPrint.json';
    private keyAPI = process.env.keyAPIGeoapify || 'f40dfb65200d4c4796217eead18e9184';

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
        await fetch(`https://api.geoapify.com/v1/routing?waypoints=${ this.transportData.start.lat},${this.transportData.start.long}|${this.transportData.end.lat},${this.transportData.end.long}&mode=drive&apiKey=${this.keyAPI}`)
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

