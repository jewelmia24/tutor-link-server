import { Router } from "express";
import { AuthRouter } from "../module/auth/auth.route";

const router = Router();

const routes = [
    {
        path: "/auth",
        route: AuthRouter
    }
]

routes.forEach((route)=> router.use(route.path, route.route))

export default router;