const {Router} = require("express")

const usersRoutes = Router()

//METODO GET

//app.get("/users", (request, response) =>{
 ///   const {page, limit} = request.query
//    response.send(`Page: ${page} View: ${limit}`)
//})

app.post("/users", (request, response) => {
    const {name, email, password} = request.body

    //Envio em formato HTML
    //response.send(`Nome: ${name} --- Email: ${email} --- Passworld: ${password}`)

    //Envio em formato json
    response.json({name, email, password})
})
