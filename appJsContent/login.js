const express = require('express');
const router = express.Router();

const credential = {
    email: "hachimetsu@gmail.com",
    password: "I m hachimetsu open website for me "
}
process.on('unhandledRejection', (error, promise) => {
    console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error);
});

router.post("/login", (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        // req.session.user = req.body.email;
        // res.end("invalid user !")
        try {
            responce.redirect("success !");

        } catch (err) {
            res.end("got unexpected error !");
            console.log(err);
        }
    }
    else {
        res.end("invalid user !")
    }
});

module.exports = router;