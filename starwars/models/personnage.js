const mongoose = require("mongoose")


/*
   "id": 12,
      "name": "Wilhuff Tarkin",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      "homeworld": "eriadu"
*/
const schema = mongoose.Schema({
	id: Number,
	name: String,
    pic: String,
    homeworld : String,
    votes:Number
})

module.exports = mongoose.model("personnages", schema)