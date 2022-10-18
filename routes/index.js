import { Router } from "express";
import filmsRoutes from "./films.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/films", filmsRoutes);

export default router;