var router = require("express").Router();
const EstudiantesController= require("../controllers/estudiantesCtr");

router.get("/",EstudiantesController.getAllStudents);

module.exports=router;