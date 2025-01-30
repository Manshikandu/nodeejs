import User from "../models/User";
import {  validationResult } from 'express-validator'
export class UserController {
 static  async signup(req,res,next) {
    // console.log(req.query);
    // const data = {name: 'tech',email: 'tach@gmail.com'}
    // res.status(200).send(data);
    // (req as any).errorStatus = 422;
    // const error = new Error('user email or password doen;t match');
    // next(error);
    //res.send(req.query)
    //res.send(req.body)
    const errors = validationResult(req);
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;
    if(!errors.isEmpty()){
        next( new Error(errors.array()[0].msg));
        //return res.status(400).json({ errors: errors.array().map(x => x.msg)});
    }

    //res.send('Signup succesfull')
    const data = {
        email,
        phone,
        password,
        name,
        type,
        status,
    }
    try {
        let user =  await new User(data).save();
        res.send(user);
    } catch (e) {
        next(e);
    }
    

 }

}

