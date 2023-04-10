const express = require("express")

const rotas = express.Router()

lista = [{"id" : 1,"nome" : "João","idade":31},{"id" : 2,"nome" : "Maria","idade":23}]

rotas.get("/",(req,res)=>{
    res.status(200).json(lista)
})

module.exports = rotas