import express from 'express';
import ClientRoute from '../routes/client';
import ClientService from "../service/client";

(async () => {
    const app = express();

    const clientService = new ClientService();
    const clientRoute = new ClientRoute(clientService);

    clientRoute.load(app);

    app.listen(process.env.HTTP_PORT, () => {
        console.log('--- port liste', process.env.HTTP_PORT);
    })
})()
