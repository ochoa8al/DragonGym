import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => res.status(201).send('<h3>Bienvenido a Dragon 🐉 Gym 💪</h3>'))

app.listen(PORT, () => console.log(`La aplicación se ha iniciado en el siguiente link: http://localhost:${PORT}`))
