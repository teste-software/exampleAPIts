import {Router} from 'express';


export default class RouteClient {

    load(app: Router) {
        const router = Router();
        const routeLoad = this.setup(router);
        app.use("/api", routeLoad);
    }

    setup(router: Router) {
        router.get('/davi/:id', (req, res) => {
            const {id} = req.params;

            if (id === '123') return res.status(200).json({message: 'exitste'});
            return res.status(200).json({message: 'n exitste'});
        });

        return router;
    }
}
