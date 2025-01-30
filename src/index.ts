//console.log('first nodesjs project');

//import { error } from 'cosole';

//import { Server } from './server';
import { Server } from './server';
let server = new Server().app;
let port = 3000;

//let app:express.Application = express();

server.listen(port,() => {
    console.log(`Server is running at port ${port}`);
});
// app.use((req,res,next) => {
// console.log('middleware');
// next();
// })



// //app.patch('/api/user/password')
// // function is_MathsByX_Available() {
// //     return false;
// // }

// // function is_MathsByY_Available() {
// //     return false;
// // }

// // function is_ScByX_Available() {
// //     return false;
// // }

// // function is_ScByY_Available() {
// //     return false;
// // }

// // function resultMathsBook() {
// //     return new Promise ((resolve, reject) => {
// //     if(is_MathsByX_Available()){
// //         resolve(true);
// //     }
// //     else if(is_MathsByY_Available()){
// //         resolve(true);
// //     }else{
// //         reject(false);
// //     }
// //     })
// // }
// // function resultScienceBook():Promise<string> {
// //     return new Promise ((resolve, reject) => {
// //     if(is_ScByX_Available()){
// //         resolve('Maths by X available');
// //     }
// //     else if(is_ScByY_Available()){
// //         resolve('Math by Y available');
// //     }else{
// //         reject('Both books not available');
// //     }
// //     })
// // }
// // resultMathsBook().then((result) => {
// //     console.log(result);
// //     if(result){
// //         resultScienceBook().then(data => {
// //             console.log(data);
// //         }).catch(e => {
// //             console.log(e);
// //         })
// //     }
// // })
// // .catch(( error ) => {
// //     console.log( 'error:',error);
// // })



// // async function final() {
// //     try {
// //         let result1 = await resultMathsBook();
// //         if(result1) result1 = await resultScienceBook();
// //         return result1;
// //     } catch (e) {
// //         return Promise.reject(e);
// //     }
// // }

// // final().then(data => {
// //     console.log('data:',data);  
// // }).catch( e => {
// //     console.log(e);       //using this data will be show in catch one
// // })

// //PROMISE OPERATOR


// // const object1 = { id: 1, name: 'tech'};
// // const object2 = {...object1,email: 'mani@gmail.com'};
// // console.log(object2);

// // const array1 = [1,2,3];
// // const array2 =  [2,3,4];
// // const array3 = [...array1,...array2]
// // console.log(array3);


