import {Request, Response} from "express"
import { createMenuObject } from "../helpers/createMenuObject"

export const home = (req: Request,res: Response)=> {
    res.render("pages/page", {
        menu: createMenuObject("all"),
        banner: {
            title:"All Waifus",
            background: "allanimals.jpg"
        }
    })
}

export const dragons = (req: Request,res: Response)=> {
    res.render("pages/page", {
        menu: createMenuObject("dragon"),
        banner: {
            title:"Dragons",
            background: "banner_dog.jpg"
        }
    })
}

export const nekos = (req: Request,res: Response)=> {
    res.render("pages/page", {
        menu: createMenuObject("neko"),
        banner: {
            title:"Nekos",
            background: "banner_cat.jpg"
        }
    })
}

export const vampires = (req: Request,res: Response)=> {
    res.render("pages/page", {
        menu: createMenuObject("vampire"),
        banner: {
            title:"Vampires",
            background: "banner_fish.jpg"
        }
    })
}