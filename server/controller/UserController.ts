import {getManager, getRepository} from "typeorm";
import { User } from "../entity/User";
import { Context } from "../core";

export default class UserController {

    public static async all(ctx: Context) {
        let result = await getRepository(User).find();
        ctx.Result({data: result});
    }
}