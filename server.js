import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

                     // Pedido, Resposta
app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()
    
    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    //usando await é uma promisse
    const user = await prisma.user.create ({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})

app.listen(3000)