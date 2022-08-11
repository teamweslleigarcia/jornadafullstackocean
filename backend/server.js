const { json } = require('express')
const express = require('express')

const app = express()
app.use(express.json())

const lista = [
  {
    id:1,
    nome:"Paulo",
    pontos:90
  },
  {
    id:2,
    nome:"Daniel",
    pontos:100
  },
  {
    id:3,
    nome:"Beatriz",
    pontos:80
  }
]

app.get('/', function (req, res) {

  res.send("Hello world")
})

app.get('/pontuacoes', function (req, res) {

  res.send(lista)
})

app.post('/pontuacoes', function (req, res) {
  const data = req.body

  lista.push(
    {
      id: lista.length + 1,
      nome: data.nome,
      pontos : data.pontos
    }
  )

  res.send(lista)
})



app.listen(3000, () => console.log("Servidor inicializado em http://localhost:3000"))