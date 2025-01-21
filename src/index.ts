//console.log('first nodesjs project');

import { error } from 'console';
import * as express from 'express';
import { resolve } from 'path';

let app:express.Application = express();

app.listen(3000,() => {
    console.log("server is running at 3000");
});

function is_MathsByX_Available() {
    return false;
}

function is_MathsByY_Available() {
    return false;
}

function is_ScByX_Available() {
    return false;
}

function is_ScByY_Available() {
    return false;
}

function resultMathsBook() {
    return new Promise ((resolve, reject) => {
    if(is_MathsByX_Available()){
        resolve(true);
    }
    else if(is_MathsByY_Available()){
        resolve(true);
    }else{
        reject(false);
    }
    })
}
function resultScienceBook():Promise<string> {
    return new Promise ((resolve, reject) => {
    if(is_ScByX_Available()){
        resolve('Maths by X available');
    }
    else if(is_ScByY_Available()){
        resolve('Math by Y available');
    }else{
        reject('Both books not available');
    }
    })
}
resultMathsBook().then((result) => {
    console.log(result);
    if(result){
        resultScienceBook().then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e);
        })
    }
})
.catch(( error ) => {
    console.log( 'error:',error);
})



async function final() {
    try {
        let result1 = await resultMathsBook();
        if(result1) result1 = await resultScienceBook();
        return result1;
    } catch (e) {
        return Promise.reject(e);
    }
}

// final().then(data => {
//     console.log('data:',data);  
// }).catch( e => {
//     console.log(e);       //using this data will be show in catch one
// })


