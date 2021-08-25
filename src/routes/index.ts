import { Router } from "express"
import * as PageController from "../controllers/pageController"
import * as SearchController from "../controllers/searchController"

const router = Router()

router.get("/", PageController.home)
router.get("/dragons", PageController.dragons)
router.get("/nekos", PageController.nekos)
router.get("/vampires", PageController.vampires)

router.get("/search", SearchController.search)

export default router;