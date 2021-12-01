const { Console } = require("console");
const express = require("express");
const app = express();

let info = [

    {
        "id": "1",
        "date": "20/02/97"

    }
]

/* const app = http.createServer((req, res) => {
 
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end("Bottom text")
}) */

app.get("/", (req, res) => {

    res.send("Hola")

})

app.get("/api/test", (req, res) => {

    res.send(info)

})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
