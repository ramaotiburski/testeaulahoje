const express = require("express")
const rotas = require("./rotas")

const servidor = express()

servidor.use(express.json())
servidor.use(express.urlencoded({extended:true}))
servidor.use(rotas)

servidor.listen(3000,()=>{
    console.log("Inicio...")
})