import { Car } from "../models/carModel";
import {Address} from "../models/transportModel_Type"
import Express from 'express';
import { Bike } from "../models/bikeModel";
import { Walk } from "../models/walkModel";
//import { CommonTransport } from "../models/commonTransportModel";

 exports.car = async(req:Express.Request, res:Express.Response, next:any) => {

    let infoAddress:{
         start:Address,
         end:Address
    } = req.body;

    console.log(infoAddress);

    let car = new Car(infoAddress.start,infoAddress.end,new Date());

    await car.getRoutingData();

    res.send(car.getTransportData());

};

exports.bike = async(req:Express.Request, res:Express.Response, next:any) => {

     let infoAddress:{
          start:Address,
          end:Address
     } = req.body;
 
     console.log(infoAddress);
 
     let bike = new Bike(infoAddress.start,infoAddress.end,new Date());
 
     await bike.getRoutingData();
 
     res.send(bike.getTransportData());
 
 };

 exports.walk = async(req:Express.Request, res:Express.Response, next:any) => {

     let infoAddress:{
          start:Address,
          end:Address
     } = req.body;
 
     console.log(infoAddress);
 
     let walk = new Walk(infoAddress.start,infoAddress.end,new Date());
 
     await walk.getRoutingData();
 
     res.send(walk.getTransportData());
 
 };

//  exports.commonTransport = async(req:Express.Request, res:Express.Response, next:any) => {

//      let infoAddress:{
//           start:Address,
//           end:Address
//      } = req.body;
 
//      console.log(infoAddress);
 
//      let commonTransport = new CommonTransport(infoAddress.start,infoAddress.end,new Date());
 
//      await commonTransport.getRoutingData();
 
//      res.send(commonTransport.getTransportData());
 
//  };