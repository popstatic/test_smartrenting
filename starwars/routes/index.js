var express = require('express');
var router = express.Router();
const personnage = require("../models/personnage")

/* GET home page. */
router.get('/', async (req, res) => {
	const persos = await personnage.find()
	//res.send(persos)
  res.render('index', { title: 'Votre personnage favori de starwars', persos:persos   });
})

router.post('/vote/:id', async (req, res) => {
  console.log(req.params.id);
  const filter = { id: req.params.id };
// update the value of the 'z' field to 42
  const updateDocument = {
     $inc: { votes: 1 } 
  };
  const result = await personnage.updateOne(filter, updateDocument);
	//res.send(persos)
})

module.exports = router;
