import {Router} from 'express';
import ClientService from "../service/client";


export default class RouteClient {
    readonly clientService: ClientService;
    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }


    load(app: Router) {
        const router = Router();
        const routeLoad = this.setup(router);
        app.use("/api", routeLoad);
    }

    setup(router: Router) {
        router.get('/davi/:id', (req, res) => {
            const {id} = req.params;

            const message = this.clientService.getId(id);
            return res.status(200).json({message});
        });

        return router;
    }
}
