const express = require('express');
const moviesRouter = express.Router();
const path = require('path');
const movies = require('../movies.json');

moviesRouter.route(['/movies', '/movies/:name'])
  .get((req, res) => {
    if (req.params.name) {
      const movieToReturn = movies.find(movie =>
        movie.title.toLowerCase() === req.params.name.toLowerCase());

      return movieToReturn
        ? res.status(200).json(movieToReturn)
        : res.status(404).json({ msg: 'No movie found!' });
    }

    res.sendFile(path.join(__dirname, '../movies.json'));
  });

module.exports = moviesRouter;
