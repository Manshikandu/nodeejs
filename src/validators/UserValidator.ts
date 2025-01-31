//import { query } from "express";
import { query,body, ValidationChain } from "express-validator";
import { userInfo } from "os";
import User from "../models/User";
export class UserValidators {
    static signup(): ValidationChain[] {
    return [
           body('name','name is required').isString().notEmpty() ,
           body('phone','Phone number is required').isString(),
           body('email','email is required').isEmail() ,
           body('password').isAlphanumeric()
           .isLength({ min : 5}) 
           .withMessage('password must be between 8-20 character'),
           body('type','User role type is required').isString(),
           body('status','User status is required').isString(),
        
        ];
    
    }
    static verifyUserEmail(): ValidationChain[] {
        return [
               body(' verification_token','verification token  is required').isNumeric() ,
               body('email','email is required').isEmail() ,
              
            ];
        
        }

        static login(): ValidationChain[] {
            return [
                  
                   query('email','email is required').isEmail() 
                   .custom((email,{req}) => {
                    return User.findOne({
                        email: email
                    }).then(user => {
                        if(user){
                            req.user = user;
                            return true;
                           }else{
                            throw("No user register withthis password");
                           }
                    }).catch( e => {
                        throw new Error(e)
                    })

                   }),
                  
                   query('password').isAlphanumeric()
                   .isLength({ min : 5}) 
                   .withMessage('password must be between 8-20 character'),
                  
                
                ];
            
            }
}
