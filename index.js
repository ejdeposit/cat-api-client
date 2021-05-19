const express = require('express')
const app = express()
const port = 3001

app.use(express.static('./cat-client/build/'))
//app.use(express.static('./cat-client/'))
/*
 api stuff
*/
//const fetch = require("node-fetch");
//var bodyParser  = require('body-parser')
////app.use(bodyParser())
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('index.html')
})

//let requesturl= "https://thatcopy.pw/catapi/rest/"
let requesturl= "/catapi/rest/"

app.get('/catapi/rest/', (req, res) => {
  res.send({'msg': 'request received'})
})

//app.post('/proxy', async (req, res) => {
//  let state= req.body.state
//
//  console.log(req)
//
//  state = state.toLowerCase()
//  let requesturl= `https://covidtracking.com/api/v1/states/${state}/daily.json`
//  let response = await fetch(requesturl)
//  let data = await response.json()
//  res.send(data)
//})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})