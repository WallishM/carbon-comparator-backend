const calculatorRouter = require('express').Router();
const calculatorController = require('../controllers/calculatorController');

calculatorRouter.get('/car',calculatorController.car);
calculatorRouter.get('/bike',calculatorController.bike);
calculatorRouter.get('/walk',calculatorController.walk);
calculatorRouter.get('/commonTransport',calculatorController.commonTransport);

module.exports = calculatorRouter;
