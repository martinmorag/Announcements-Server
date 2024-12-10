const express = require('express');
const router = express.Router();
const anunciosController = require('../controllers/items');

router.get('/count', anunciosController.getItemCount);
router.post('/', anunciosController.crearAnuncio);
router.put('/:id', anunciosController.editarAnuncio);

module.exports = router;
