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
    
})

module.exports = usersRoutes
