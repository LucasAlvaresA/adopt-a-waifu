import {Request, Response} from "express";

import  { Waifu } from "../models/waifu";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request,res: Response)=> {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect("/");
        return;
    }

    let list = Waifu.getFromName(query);

    res.render("pages/page", {
        menu: createMenuObject(""),
        list,
        query
    });
}