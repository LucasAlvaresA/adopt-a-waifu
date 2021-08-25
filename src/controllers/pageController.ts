import {Request, Response} from "express"

export const home = (req: Request,res: Response)=> {
    res.send('home no controller')
    // res.render("pages/page")
}

export const dragons = (req: Request,res: Response)=> {
    // res.render("pages/page")
}

export const nekos = (req: Request,res: Response)=> {
    // res.render("pages/page")
}

export const vampires = (req: Request,res: Response)=> {
    // res.render("pages/page")
}