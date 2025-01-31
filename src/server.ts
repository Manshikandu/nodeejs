import * as express from 'express';
import * as mongoose from 'mongoose';
import { resolve } from 'path';
import { getEnvironmentVariables } from './env/environment';
import UserRouter from './routers/UserRouter';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';



export class Server {

    public app:express.Application = express();
    constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleError();
    }

    setConfigs() {
    this.connectMongoDB();
    this.allowCors();
    this.configureBodyParser();
    
    }
    connectMongoDB() {
    mongoose.connect(getEnvironmentVariables().db_uri)
    .then(() =>{
    console.log('Connected to the db')
})


}
configureBodyParser(){
this.app.use(bodyParser.urlencoded({
    extended: true
}))
    }
allowCors(){
    this.app.use(cors());
}
    setRoutes() {
    this.app.use('/api/user',UserRouter);
    }

    error404Handler(){
        this.app.use((req,res) => {
        res.status(404).json({
        message: 'Not Found',
        Status_code: 404
        })  
        })
    }
    handleError(){
        this.app.use((error,req,res,next) => {
        const errorStatus = req.errorStatus  || 500;
        res.status(errorStatus).json({
        message:error.message || 'something went wrong. Please try again',
        Status_code: errorStatus
        })  
        })
    }

    

}