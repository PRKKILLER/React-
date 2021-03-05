/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
// import the require dependencies

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.set('view engine', 'ejs');

// use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// start your server on port 3001
app.listen(3001);
console.log('Server Listening on port 3001');
// use express session to maintain session data
app.use(session({
  secret: 'cmpe273_kafka_passport_mongo',
  resave: false,
  // Forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: false,
  // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
  duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
  activeDuration: 5 * 60 * 1000,
}));

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(bodyParser.json());

// Allow Access Control
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//   var Users = [{
//       username : "admin",
//       password : "admin"
//   }]

//   var books = [
//     {"BookID" : "1", "Title" : "Book 1", "Author" : "Author 1"},
//     {"BookID" : "2", "Title" : "Book 2", "Author" : "Author 2"},
//     {"BookID" : "3", "Title" : "Book 3", "Author" : "Author 3"}
// ]

// //Route to handle Post Request Call
// app.post('/login',function(req,res){

//     // Object.keys(req.body).forEach(function(key){
//     //     req.body = JSON.parse(key);
//     // });
//     // var username = req.body.username;
//     // var password = req.body.password;
//     console.log("Inside Login Post Request");
//     //console.log("Req Body : ", username + "password : ",password);
//     // console.log("Req Body : ",req.body);
//     Users.filter(function(user){
//         if(user.username === req.body.username && user.password === req.body.password){
//             res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
//             req.session.user = user;
//             res.writeHead(200,{
//                 'Content-Type' : 'text/plain'
//             })

//             res.end("Successful Login");
//         }
//         else{
//             res.writeHead(401,{
//                 'Content-Type' : 'text/plain'
//             })

//            res.end("Unsucessfull");
//         }
//     })

// });

// app.post('/create',function(req,res){
//     console.log("Inside create Post Request");
//     console.log("Req Body inside Create: ",req.body);
//     data=req.body
//     books=books.concat(req.body);
//     console.log("array after create",books);
//     res.end("Sucessful")

// });

// app.post('/delete',function(req,res){
//     console.log("Inside delete Post Request");
//     console.log("Req Body inside Delete: ",req.body.BookID);
//     id=req.body.BookID;
//     console.log("HIIIII",books.length)
//     flag=0;
//     let i=0;
//     for (i;i<books.length;i++){
//        if(books[i].BookID==id){
//            books.splice(i,1);
//            flag=1;
//            res.end("Deleted");
//            break;
//            }

//     }
//     if(flag==0){
//       res.end("Not")
//     }
// });

// //Route to get All Books when user visits the Home Page
// app.get('/home', function(req,res){
//     console.log("Inside Home Login");
//     res.writeHead(200,{
//         'Content-Type' : 'application/json'
//     });
//     console.log("Books : ",JSON.stringify(books));
//     res.end(JSON.stringify(books));

// })
