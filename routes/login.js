import { Router } from "express"
import jwt from "jsonwebtoken"
import { results } from "../data/agentes.js"

const router = Router()

router.post("/", async (req, res) => {

    const { email, password } = req.body
    const esAgente = results.some(agente => agente.email && agente.password == password)
    const secreto = process.env.JWT_SECRET
    if (esAgente) {
        const token = jwt.sign({ email: email }, secreto, { expiresIn: 120 })

        res.json({
            html: `<h1>Bienvenido, ${(email)}</h1>
                    <h2>welcome</h2>
                    <a href= "/casos">Ver casos</a>`,
        
                    token: token,
                    email: email
        })
    }else {
        res.status(401).send('usuarios invalido')
    }
})

export {router}