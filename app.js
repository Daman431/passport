const passport = require('passport');
const express = require('express');
const FacebookStrategy = require('passport-facebook').Strategy
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname,"./public")));
app.set("view engine","hbs");



passport.use(new FacebookStrategy(
    {
        clientID: "3006758226031506",
        clientSecret: "06c219e7c105955a6e88cf9c83a57d17",
        callbackURL: "http://localhost:3000/callback"  
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }))
app.get("/login",passport.authenticate('facebook'),(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000/home");
})


app.get('/callback',passport.authenticate('facebook',{ failureRedirect: '/home' }),function(req,res){
    console.log("working!")
    res.redirect("/home")
})

app.get("/home",(req,res)=>{
    res.render('index');
})

app.listen(3000);