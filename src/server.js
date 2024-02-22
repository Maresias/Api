const express = require('express')

const app = express()
app.use(express.json())

app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params
    response.send(`
    Mensagem ID: ${id} .
    Para o usuario: ${user}`)
})

app.get("/users", (request, response) =>{
    const {page, limit} = request.query
    response.send(`Page: ${page} View: ${limit}`)
})

app.post("/user", (request, response) => {
    const {name, email, password} = request.body

    //Envio em formato HTML
    //response.send(`Nome: ${name} --- Email: ${email} --- Passworld: ${password}`)

    //Envio em formato json
    response.json({name, email, password})
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));