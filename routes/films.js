import { Router } from "express";
import * as controllers from "../controllers/films.js";

const router = Router();

router.get("/", controllers.getFilms);
// router.get("/:id", controllers.getFilms);
// router.post("/", controllers.createFilms);
// router.put("/:id", controllers.updateFilms);
// router.delete("/:id", controllers.deleteFilms);

export default router;