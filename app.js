const path = require('path');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
// using bodyparser as Alternative !
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));


const login = require(path.join(__dirname, "appJsContent", "login"));
app.use("/", login);

// const dashboard = require(path.join(__dirname, "dashboard"));
// app.use("/", dashboard);

// const { v4: uuidv4 } = require('uuid');
// const session = require('express-session');
// app.use(session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true
// }));
// app.get("/dashboard", function (request, response) {
//     response.render('dashboard', {
//         title: "Login System"
//     });
// });

app.get('/', function (req, res) {
    res.render('body-login', { title: "Login System" });
});

app.listen(5000, () => { console.log("server is up !") });






// // http://localhost:3000/


// // http://localhost:3000/auth
// app.post('/auth', function (request, response) {
//     // Capture the input fields
//     let username = request.body.username;
//     let password = request.body.password;
//     // Ensure the input fields exists and are not empty
//     if (username && password) {
//         // Execute SQL query that'll select the account from the database based on the specified username and password
//         connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
//             // If there is an issue with the query, output the error
//             if (error) throw error;
//             // If the account exists
//             if (results.length > 0) {
//                 // Authenticate the user
//                 request.session.loggedin = true;
//                 request.session.username = username;
//                 // Redirect to home page
//                 response.redirect('/home');
//             } else {
//                 response.send('Incorrect Username and/or Password!');
//             }
//             response.end();
//         });
//     } else {
//         response.send('Please enter Username and Password!');
//         response.end();
//     }
// });

// // http://localhost:3000/home
// app.get('/home', function (request, response) {
//     // If the user is loggedin
//     if (request.session.loggedin) {
//         // Output username
//         response.send('Welcome back, ' + request.session.username + '!');
//     } else {
//         // Not logged in
//         response.send('Please login to view this page!');
//     }
//     response.end();
// });

// app.listen(3000);