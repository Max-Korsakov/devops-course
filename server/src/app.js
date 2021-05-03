import express from 'express';
import path from 'path'
import {quotesRouter} from '../api/routes/quotes'


const application = () => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../static')));
    app.use('/api/quotes', quotesRouter);
    app.get('/ping', function (req, res) {
        res.send(JSON.stringify(`{ "statusCode": 200, "message": "OK", time: "${new Date()}"}`))
      })

    return app;
};

export default application;