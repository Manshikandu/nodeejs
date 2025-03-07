import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from '../validators/UserValidator'
import { GlobalMiddleware } from "../Middleware/GlobalMiddleware";
class UserRouter {
 public router : Router;

 constructor(){
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
 }

 getRoutes() {
  this.router.get('/login',UserValidators.login(),GlobalMiddleware.checkError,UserController.login)
    
}
 postRoutes() {
   this.router.post('/signup',UserValidators.signup(),GlobalMiddleware.checkError,UserController.signup)
  
 }
 patchRoutes() {
  this.router.patch('/verify',UserValidators.verifyUserEmail(),GlobalMiddleware.checkError,UserController.verify);
 }
 putRoutes() {}
 deleteRoutes() {}
 

}
export default new UserRouter().router;
