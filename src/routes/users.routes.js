const {Router} = require("express")

const usersRoutes = Router()

//METODO GET 


//-- USANDO O QUERY

//app.get("/users", (request, response) =>{
 ///   const {page, limit} = request.query
//    response.send(`Page: ${page} View: ${limit}`)
//})

// USANDO PARAMS

// app.get("/message/:id/:user", (request, response) => {
//     const {id, user} = request.params
//     response.send(`
//     Mensagem ID: ${id} .
//     Para o usuario: ${user}`)
// })

usersRoutes.post("/", (request, response) => {
    const {name, email, password} = request.body

    //Envio em formato HTML CLIK AQUI PARA VER

    //response.send(`Nome: ${name} --- Email: ${email} --- Passworld: ${password}`)

    //Envio em formato json
    response.json({name, email, password})
})

module.exports = usersRoutes
