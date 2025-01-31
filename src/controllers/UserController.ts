import User from "../models/User";
import { Utlis } from "../utlis/Utlis";

export class UserController {
 
 static  async signup(req,res,next) {
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;
    const email = req.body.email;
    const type = req.body.type;
    const status = req.body.status;
    const verification_token = Utlis.generateVerificationToken();

    try{
    const hash = await Utlis.encryptPassword(password);

    const data = {
        email,
        verification_token,
        verification_token_time: Date.now() + new Utlis().MAX_TOKEN_TIME,
        phone,
        password: hash,
        name,
        type,
        status,
    }
        let user =  await new User(data).save();
        const payload = {
            user_id : user._id,
            email: user.email
        };
        const token = Utlis.jwtsign(payload);
        res.json({
            token: token,
            user: user,
        })
        //send email to user for verification
        res.send(user);
}catch (e) {
        next(e);
    }
    

 }
 static async verify(req,res,next) {
    const  verification_token = req.body.verification_token;
    const email = req.body.email;
    try {
        const user = await User.findOneAndUpdate({
            email : email,
            verification_token: verification_token,
            verification_token_time: {$gt: Date.now()},

        },
    {
      email_verified: true  
    },
    {
        new: true
    }
    );

        if(user){
        res.send(user);
        //update & send response
        }else{
            throw new Error('Email verification token is expired. please try again')
        }
    } catch (e) {
        next(e);
    }
    
    
}

static async login(req,res,next){
    const user = req.user;
    const password = req.query.password;
    const data = {
        password,
        encrypt_password: user.password
    };
    
    try{
       await Utlis.comparePassword(data);
       
       const payload = {
           user_id : user._id,
           email: user.email
       };
       const token = Utlis.jwtsign(payload);
       res.json({
           token: token,
           user: user,
       })
    }catch(e){
      next(e);
    }
}



}

