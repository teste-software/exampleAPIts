import express from 'express';
import ClientRoute from '../routes/client';

(async () => {
    const app = express();
    const clientRoute = new ClientRoute();

    clientRoute.load(app);

    app.listen(process.env.HTTP_PORT, () => {
        console.log('--- port liste', process.env.HTTP_PORT);
    })
})()
