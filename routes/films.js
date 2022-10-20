import express from "express";
import parser from "body-parser"
import controllers from "../controllers/films.js";

const router = express.Router();
router.use(parser.json())


router.get("/", controllers.getFilms);
router.get("/id/:id", controllers.getId);
router.get("/title/:title", controllers.getTitle);
// %20 between spaces in url
router.post("/", controllers.createFilms);
router.put("/id/:id", controllers.editFilms);
router.delete("/id/:id", controllers.deleteFilms);

export default router;