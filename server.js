import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

                // Pedido, Resposta
app.get('/usuarios', (req, res) => {
    
    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    //usando await é uma promisse
    await prisma.user.create ({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({message: "Usuário criado com sucesso"})
})

app.listen(3000)