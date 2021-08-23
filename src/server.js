const express = require('express')
const app = express()
const database = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/pokemons', (req, res) => {
    res.send(database.mostrarTudo())
})

app.get('/pokemons/:id', (req, res) => {
    res.send(database.mostrar(req.params.id))
})

app.post('/pokemons', (req, res) => {
    const pokemon = database.save({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.put('/pokemons/:id', (req,res) => {
    const pokemon = database.atualizaPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    })

    res.send(pokemon)
})

app.delete('/pokemons/:id', (req,res) => {
    res.send(database.deletar(req.params.id))
})

app.post('/batalha', (req,res) =>{
    res.send(database.batalha(req.body.id1, req.body.id2q))
})

app.listen(8080)