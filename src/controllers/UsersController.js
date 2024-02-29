const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController{
    /** REGRAS RECOMENDADAS PARA USO DOS CONTROLLES
     * Index - GET para listar vários registros.
     * Show - GET para exivir um registro especifico.
     * create - POST para criar um registro.
     * Update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    async create(request, response){
        const {name, email, password} = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [ email])
        
        if (checkUserExists){
            throw new AppError("Este e-mail já está em uso. ")
        }

        const hashedPassword = await hash(password, 8)

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        )

        return response.status(201).json()
    }
}


module.exports = UsersController