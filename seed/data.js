import db from "../db/connection.js";
import Film from "../models/Film.js";
import films from "./films.json" assert { type: "json" };

const insertData = async () => {

  await db.dropDatabase();

  await Film.create(films);

  await db.close();
};

insertData();