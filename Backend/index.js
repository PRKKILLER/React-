/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved *//* eslint-disable consistent-return */
/* eslint-disable no-irregular-whitespace *//* eslint-disable no-console */
/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
/* eslint-disable max-len */
// import the require dependencies

const express = require('express');

const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/profile', require('./routes/profileRoute'));
app.use('/group', require('./routes/createGroupRoute'));
app.use('/mygroup', require('./routes/myGroupRoute'));
app.use('/RecentActivity', require('./routes/recentActivityRoute'));
app.use('/individualgroup', require('./routes/individualGroupRoute'));
app.use('/dashboard', require('./routes/dashboardRoute'));

// start your server on port 3000
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`listening on port ${port}`));
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
