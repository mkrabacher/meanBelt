// require express
var express = require("express");
// path module
var path = require("path");
var mongoose = require('mongoose');
var session = require('express-session');
var moment = require('moment');
// create the express app
var app = express();
app.use(session({ secret: 'codingdojorocks' }));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/BeltExam/dist' ));


//DB stuff
mongoose.connect('mongodb://localhost/BeltExam');
var Schema = mongoose.Schema

var PetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
    likes: {
        type: Number,
    },
    skills: [String]
}, { timestamps: true })


mongoose.model('Pet', PetSchema);

var Pet = mongoose.model('Pet');
//end DB stuff

//routes
app.get('/allPets', function (req, res) {
    console.log('getting all pets in server')
    Pet.find({},function(err, pets) {
        if(err){
            console.log("e0rr0r",)
        }else{
            res.json({message:'The Pets', pets: pets})
        }
    })
})
app.post('/getPet', function (req, res) {
    console.log('looking for pet in DB')
    console.log(req.body)
    Pet.findOne({_id:req.body._id},function(err, pet) {
        if(pet != null) {
            console.log('found pet in server')
            res.json({message:'The pet', pet: pet})
        } else {
            res.json({errorMsg: 'dat pet don\'t exists'})
        }
    })
})
app.post('/updatePet', function (req, res) {
    console.log('upating pet in server')
    Pet.find({name: req.body.name}, function(err, pet) {
        if (pet.length > 0) {
            res.json({err: "error"})
        } else {
            Pet.update({_id: req.body._id}, {
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                skills: req.body.skills,
            }, function(err, pet) {
                if(err){
                    console.log("update error",)
                    res.json({err})
                }else{
                    res.json({message:`pet updated`, pet: req.body._id})
                }
            })
        }
    })
})
app.post('/likePet', function (req, res) {
    console.log('likeing pet in server')
    console.log(req.body)
    Pet.update({_id: req.body._id}, {
        likes: req.body.likes + 1,
    }, function(err, pet) {
        if(err){
            console.log("like error", err)
        }else{
            res.json({message:`pet liked`, pet: req.body._id})
        }
    })
})
app.post('/deletePet', function (req, res) {
    console.log('deleteing Pet in server')
    Pet.remove({_id: req.body._id}, function(err, user) {
        if(err){
            console.log("deleteing error",)
        }else{
            res.json({message:`Pet deleted`})
        }
    })
})
app.post('/addPet', function(req, res) {
    Pet.find({name: req.body.name}, function(err, pet) {
        console.log('in server')
        if(pet.length == 0) {            
            console.log("creating new pet in server")
            newPet = new Pet()
            newPet.name = req.body.name
            newPet.type = req.body.type
            newPet.description = req.body.description
            newPet.skills = req.body.skills
            newPet.likes = 0
            console.log(pet)
            newPet.save(function(err) {
                if(err){
                    console.log('new pet error')
                    res.json({err})
                }else{
                    res.json({message:`with ${newPet.fName} added`})
                    console.log('pet added');
                }
            })
        } else {
            res.json({error: 'that pet already exists in our DBs'});
        }
    })
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./BeltExam/dist/index.html"))
});
//end routes


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
