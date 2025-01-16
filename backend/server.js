const PORT = process.env.PORT ?? 8000
const express = require("express")
const app = express()
const cors = require("cors")
const authRouter = require("./routes/authRouter");
const journalRouter = require("./routes/journalRouter")
const flowerRouter = require("./routes/flowerRoutes")
const soundRouter = require("./routes/soundRouter")
const colorRouter = require("./routes/colorRouter")

app.use(cors())
app.use(cors({
    origin: "http://localhost:8000" //"https://social-soothe-frontend.onrender.com"
}))
/*
app.use(cors({
    origin: "https://social-soothe-frontend.onrender.com" || "http://localhost:3000", // Replace with your frontend URL in production
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies if needed
  }));
app.use(express.json()); */


// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.use("/", authRouter);
app.use("/", journalRouter)
app.use("/", flowerRouter)
app.use("/", soundRouter)
app.use("/", colorRouter)

module.exports = app;


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
