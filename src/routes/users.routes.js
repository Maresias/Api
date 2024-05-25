const {Router} = require("express")

const UsersController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router()

// function myMiddleware(request, response, next){
//     console.log("Voce passou pelo Middleware!")

//     if(!request.body.isAdmin){
//         return response.json({message: "User unauthorized"})
//     }

//     next()
// }


const usersController = new UsersController()

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

// usersRoutes.use(myMiddleware)

usersRoutes.post("/",  usersController.create)
usersRoutes.put("/",ensureAuthenticated, usersController.update)

module.exports = usersRoutes

