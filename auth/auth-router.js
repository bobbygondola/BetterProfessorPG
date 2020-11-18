const router = require('express').Router();
const db = require('./auth-helpers')
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

//token
function createToken(user) {
    const payload = {
      teacher_id: user.id,
      username: user.username,
      subject: user.subject,
    };
    const secret = process.env.JWT_SECRET || "Neuralink";
    const options = {
      expiresIn: "2d",
    };
    return jwt.sign(payload, secret, options);
  }
  
  //register a teacher to manage students
  router.post("/register", (req, res) => {
      const { username, password, subject } = req.body;
      const rounds = 13;
      const hash = bcryptjs.hashSync(password, rounds);
      db.register({ username, password: hash, subject })
        .then((user) => {
          res.status(200).json({message: "Welcome Professor!"});
        })
        .catch(error => {
            console.log('error registering', error)
            res.status(500).json({message: "Sorry, try again!"})
        })
    });
  
    //login as a teacher to manage students
    router.post("/login", (req, res) => {
      const { username, password } = req.body;
      // verify user exists then password
      db.login({ username })
        .then(([user]) => {
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = createToken(user);
                req.session.user = user;
              res.status(200)
              .json({
                  message: `Welcome Professor ${user.username}`,
                  session: req.session,
                  token
                });
            } else {
                res.status(401).json({message: "Please Provide Correct Credentials"})
            }
          
        })
        .catch(err => res.send(err));
    });
  
    //logout from teacher
    router.delete('/logout', (req,res) => {
      if (req.session) {
          req.session.destroy((error) => {
            if (error) {
              res.status(500).json({ message: "Hmm.. Try again.." });
            } else {
              res.status(204).end();
            }
          });
        } else {
          res.status(204).end();
        }
    })
  
  module.exports=router;