
const PORT = process.env.PORT ?? 8000
const cors = require('cors')
const express = require('express')
const authRouter = require("./routes/authRouter");
const app = express()
const passport = require("passport");




const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

app.use(cors())
app.use(passport.initialize());
app.use(
    expressSession({
      cookie: {
       maxAge: 7 * 24 * 60 * 60 * 1000 // ms
      },
      secret: 'a santa at nasa',
      resave: true,
      saveUninitialized: true,
      store: new PrismaSessionStore(
        new PrismaClient(),
        {
          checkPeriod: 2 * 60 * 1000,  //ms
          dbRecordIdIsSessionId: true,
          dbRecordIdFunction: undefined,
        }
      )
    })
  );

app.use(passport.session());
app.use(express.json());
app.use((req, res, next) => {
    console.log("Incoming Request:", req.method, req.url);
    console.log("Request Body:", req.body);
    next();
  });
app.use(express.urlencoded({ extended: false }));


app.use("/", authRouter);
module.exports = app;


app.listen(PORT, ()=> console.log(`Sever running on PORT ${PORT}`))
