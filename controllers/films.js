import Film from "../models/Film.js";

const controller = {
  getFilms(req, res) {
    Film.find({})
    .then(films => {res.json(films)})
  },

  getId(req, res) {
    Film.findById(req.params.id )
      .then(films => { res.json(films) })
  },

  getTitle(req, res) {
    Film.find({ title: req.params.title })
    .then(films => {res.json(films)})
  },

  createFilms(req, res) {
    Film.create(req.body)
    .then(films => {res.json(films)})
  },

  editFilms(req, res) {
    Film.findByIdAndUpdate(req.params.id, req.body,
    { new: true })
    .then(films => { res.json(films) })
  },

  deleteFilms(req, res) {
    Film.findByIdAndDelete(req.params.id)
    .then(films => { res.json(films) })
  }
}

export default controller