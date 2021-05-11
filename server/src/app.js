import express from 'express';
import cors from 'cors'
import {quotesRouter} from '../api/routes/quotes'


const application = () => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors())
    app.use('/api/quotes', quotesRouter);
    app.get('/ping', function (req, res) {
        res.send(JSON.stringify(`{ "statusCode": 200, "message": "OK", time: "${new Date()}"}`))
      })

    return app;
};

export default application;