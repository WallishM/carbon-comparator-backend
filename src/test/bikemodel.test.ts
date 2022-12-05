import {expect, jest, test} from '@jest/globals';
import { Bike } from "../models/bikeModel";
import { Address } from "../models/transportModel_Type";

test('bikeModel instantiation & get API info', async () => {
    
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

    let bike = new Bike(start,end,new Date());
    
    await bike.getRoutingData();
    
    expect(bike.getTransportData().distance).toBeGreaterThan(0);
    expect(bike.getTransportData().duration).toBeGreaterThan(0);
});