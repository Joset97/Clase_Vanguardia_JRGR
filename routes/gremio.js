var express = require('express');
var router = express.Router();

const gremioCtrl = require("../controllers/gremioCtrl") ;

router.post('/add',gremioCtrl.AddGremio);
router.get('/get',gremioCtrl.getGremio);
router.put('/update',gremioCtrl.updateName);
router.put('/delete',gremioCtrl.deleteGremio);

router.get('/LOTR',gremioCtrl.fetchData);
module.exports = router;