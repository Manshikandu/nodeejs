//console.log('first nodesjs project');

import * as express from 'express';

let app:express.Application = express();

app.listen(3000,() => {
    console.log("server is running at 3000");
});

