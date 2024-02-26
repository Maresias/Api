const AppError = require("../utils/AppError")

class UsersController{
    /** REGRAS RECOMENDADAS PARA USO DOS CONTROLLES
     * Index - GET para listar vários registros.
     * Show - GET para exivir um registro especifico.
     * create - POST para criar um registro.
     * Update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    create(request, response){
        const {name, email, password} = request.body

        if(!name){
            throw new AppError("Nome é Obrigatório")
        }

        //Envio em formato HTML CLIK AQUI PARA VER
    
        //response.send(`Nome: ${name} --- Email: ${email} --- Passworld: ${password}`)
    
        //Envio em formato json
        
        response.status(201).json({name, email, password})
    }
}


module.exports = UsersController