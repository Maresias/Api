const express = require('express')

const app = express()
app.use(express.json())

app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params
    response.send(`
    Mensagem ID: ${id} .
    Para o usuario: ${user}`)
})


const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));