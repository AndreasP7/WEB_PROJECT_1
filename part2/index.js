
const UserDAO = require('./models/users')
const { FavouritesDAO, Favourite } = require('./models/favourites');

const express = require('express')

const app = express()

app.use(express.json());

const userDao = new UserDAO();
const favouritesDAO = new FavouritesDAO();

let username;
let psw;
let authenticate;

userDao.registerUser("Andreas", "2002")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin to access the resource
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify the allowed HTTP methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Specify the allowed headers
    next();
});

app.post('/user', function(req,res){
    
    
    username = req.body.username;
    psw = req.body.password

    console.log('Received credentials:', username, psw);
    authenticate = userDao.authenticate(username, psw);
    if(authenticate ==null){
        res.type("application/json")
        res.status( 401);
        res.send('{"message":"User not authenticated. Wrong Username or Password"}')
        return
    }
    else{
        let sessionId = authenticate.uuid;
        res.type("application/json")
        res.status( 200);
        res.send({ sessionId: sessionId })
        console.log({ sessionId: sessionId })
        return
    }
    
})

app.post('/fav', function(req,res){
        
})



app.listen(8080);