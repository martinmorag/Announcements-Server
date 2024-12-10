const express = require('express');
const router = express.Router();
const anunciosController = require('../controllers/items');

router.get('/', anunciosController.getAll);
router.get('/:id', anunciosController.getSingle);
router.delete('/:id', anunciosController.borrarAnuncio);

module.exports = router;