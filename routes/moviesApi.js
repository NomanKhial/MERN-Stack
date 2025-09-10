const express = require('express');
const moviesRouter = express.Router({caseSensitive: true, strict: true, mergeParams: true});
// caseSensitive -> which makes route caseSensitive
// strict -> make url more specfic and avoid adding extra trailing slashes

const path = require('path');
const movies = require('../movies.json');

moviesRouter.route(['/movies', '/movies/:name'])
  .get((req, res) => {
    if (req.params.name) {
      const movieToReturn = movies.find(movie =>
        movie.title === req.params.name);

      return movieToReturn
        ? res.status(200).json(movieToReturn)
        : res.status(404).json({ msg: 'No movie found!' });
    }

    res.sendFile(path.join(__dirname, '../movies.json'));
  });

  moviesRouter.route('/script')
     .get((req, res)=>{
        res.render('index', {username:"nomankhial"})
     })


moviesRouter.route("/media")
     .get((req, res)=>{
        res.sendFile(path.join(__dirname, "../public/er.jpg"))
     })

module.exports = moviesRouter;
