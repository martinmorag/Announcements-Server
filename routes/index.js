const express = require('express');
const router = express.Router();

router.use('/items', require('./items'));
router.use('/approved', require('./approved'));

module.exports = router;
