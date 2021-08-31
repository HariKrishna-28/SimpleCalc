const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// extended allows us to use nested objects
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>")
    //relative path
    // res.sendFile("index.html")

    // For the exact path across all devices use the below code
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    // res.send("Romba sandhosama iruku nanbargale!")
    // console.log(req.body)
    var num1 = parseInt(req.body.num1)
    var num2 = parseInt(req.body.num2)
    var result = num1 + num2
    res.send(`the sum is ${result}`)

})


app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + '/bmicalc.html')
})

app.post("/bmicalculator", (req, res) => {
    var height = parseInt(req.body.Height)
    var weight = parseInt(req.body.Weight)
    var bmi = Math.round(height / (height * height), 2)
    res.send(`Your BMI is ${height + weight}`)

})

// //  heroku config
// app.use(express.static(path.join(__dirname)));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(process.env.PORT || 3000, () => {
    console.log("server running at port 3000!")
})