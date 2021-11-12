const express = require('express');
const router = express.Router();
const Corvettes = require('./corvettesModel');

router.get('/', (req, res, next) => {
  Corvettes.getAll()
    .then((corvettes) => {
      res.json(corvettes);
    })
    .catch(next);
});

module.exports = router;
