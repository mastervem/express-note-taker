const express = require("express");
const path = require("path")

const app = express();

// middlewares
app.use(express.static("public"))
// app.use(????)

// routes -> instructions for our server
app.get("/notes", (req, res) => {
    // res.send("./public/notes.html")
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

// app.get("/assets/css/styles.css", (req, res) => {
//     res.sendFile(path.join(__dirname,"./public/assets/css/styles.css"))
// })

// api/notes
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"./db/db.json"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html") )
})

// POST /api/notes
app.post("/api/notes", (req, res) => {
    // your code
    
})

app.listen(3001, () => {
    console.log("Server has started!")
})

// __dirname
// C:\Users\User\Desktop\bootcamp-work\challeges\express-note-taker
//  "./public/notes.html"

// absolute path
// C:\Users\User\Desktop\bootcamp-work\challeges\express-note-taker\public\notes.html

// relative path
// public\notes.html