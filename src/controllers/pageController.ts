import {Request, Response} from "express"
import { Waifu } from "../models/waifu" 
import { createMenuObject } from "../helpers/createMenuObject"

export const home = (req: Request,res: Response)=> {
    let list = Waifu.getAll();

    res.render("pages/page", {
        menu: createMenuObject("all"),
        banner: {
            title:"All Waifus",
            background: "banner_all.jpg"
        },
        list
    })
}

export const dragons = (req: Request,res: Response)=> {
    let list = Waifu.getFromType("dragon");

    res.render("pages/page", {
        menu: createMenuObject("dragon"),
        banner: {
            title:"Dragons",
            background: "banner_dragon.png"
        },
        list
    })
}

export const nekos = (req: Request,res: Response)=> {
    let list = Waifu.getFromType("neko");

    res.render("pages/page", {
        menu: createMenuObject("neko"),
        banner: {
            title:"Nekos",
            background: "banner_neko.jpg"
        },
        list
    })
}

export const vampires = (req: Request,res: Response)=> {
    let list = Waifu.getFromType("vampire");

    res.render("pages/page", {
        menu: createMenuObject("vampire"),
        banner: {
            title:"Vampires",
            background: "banner_vampire.png"
        },
        list
    })
}