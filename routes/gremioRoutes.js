const express = require('express');
const router = express.Router();
const gremioController = require('../controllers/gremioController');


router.post('/', gremioController.addGremio);

router.put('/updateName', gremioController.updateName);

router.delete('/deleteGremio', gremioController.deleteGremio);

router.get('/getGremio', gremioController.getGremio);

module.exports = router;