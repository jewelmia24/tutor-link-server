import { Router } from "express";
import { AuthRouter } from "../module/auth/auth.route";
import { UserRouter } from "../module/user/user.route";

const router = Router();

const routes = [
    {
        path: "/auth",
        route: AuthRouter
    },
    {
        path: '/users',
        route: UserRouter
    }
]

routes.forEach((route)=> router.use(route.path, route.route))

export default router;