const express = require('express')
const app = express()

var requesttime = (req, res, next) => {
  const date=new Date()
  let hours = date.getHours()
  let day = date.getDay()
  if (hours < 9 || hours > 17 || day == 0 || day == 6) {
      return res.sendFile(__dirname + '/public/Offservice.html')
  }
    next()
}

app.get('/style.css', (req,res) => {
    res.sendFile(__dirname + '/public/style.css')
})

app.use(requesttime)
app.get('/home', (req,res) => {
    res.sendFile(__dirname + '/public/Home.html')
})

app.get('/services', (req,res) => {
    res.sendFile(__dirname + '/public/Service.html')
})

app.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/public/Contact.html')
})


const port = 5000
app.listen(port,()=>console.log('server started'))