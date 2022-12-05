import {expect, jest, test} from '@jest/globals';
import { Car } from '../models/carModel';
import { Address } from "../models/transportModel_Type";

test('carModel instantiation & get API info', async () => {
    
    let start:Address = {    
        address:'',
        zipCode:'',
        city:'',
        country:'',
        lat:0,
        long:0
    };
    let end:Address = {    
        address:'',
        zipCode:'',
        city:'',
        country:'',
        lat:0,
        long:0
    };
    
    start.lat = 43.6044622;
    start.long = 1.4442469;
    
    end.lat = 43.927755;
    end.long = 2.147899;

    let car = new Car(start,end,new Date());
    
    await car.getRoutingData();
    
    expect(car.getTransportData().distance).toBeGreaterThan(0);
    expect(car.getTransportData().duration).toBeGreaterThan(0);
});