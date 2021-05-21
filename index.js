const express = require('express')
const app = express()
const port = 3001

const fetch = require("node-fetch");
const bodyParser  = require('body-parser')

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('./cat-client/build/'))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('index.html')
})

app.get('/catapi/rest/', async (req, res) => {
  let requesturl= "https://thatcopy.pw/catapi/rest/"
  let response = await fetch(requesturl)
  let data = await response.json()
  console.log(data)
  //res.send({'msg': 'request received'})
  res.send(data)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})