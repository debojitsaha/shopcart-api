import { Request, Response, Router } from "express";
import { GenerateResponse } from "../utils/response.creator";
import userRouter from "./user.route";

const mainRouter: Router = Router();

mainRouter.use('/user',userRouter);

mainRouter.use((req: Request, res: Response) => {
    GenerateResponse(res, 404);
});

export { mainRouter };
