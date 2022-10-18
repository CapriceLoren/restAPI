import fetch from 'node-fetch'
//lets us run this in node instead of the browser
import { promises as fsPromises } from 'fs'
//as renames

// fetch("https://the-one-api.dev/v2/character", {
//   headers: {
//     'Authorization': 'Bearer 7RFrk35dJxu-iOMmzcsA'
//   }
// })
//   .then(response=> response.json())
//   .then(data => fsPromises.writeFile("./characters.json", JSON.stringify(data)))
//   .catch(error => console.error(error))


fetch("https://ghibliapi.herokuapp.com/films")
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./films.json", JSON.stringify(data)))
  .catch(error => console.error(error))
