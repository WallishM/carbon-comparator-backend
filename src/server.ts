import Express from 'express';
import Path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const volleyball = require ('volleyball');
const app = Express();
const port = process.env.PORT;


const calculatorRoutes = require('./routes/calculator');

app.use(volleyball);
app.use(Express.json());
app.use(Express.urlencoded());
app.use(Express.static(Path.join(__dirname,'public')));

app.use('/calculator', calculatorRoutes);

app.listen(port, () => console.log(`####    Server is running on port ${port} - work in progress    ####`));

