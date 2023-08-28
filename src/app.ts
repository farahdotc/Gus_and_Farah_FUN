import express from 'express'

const app = express();

app.get('/', (req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.send({data:'this is my fist endpoint'})
}) 

export {app}