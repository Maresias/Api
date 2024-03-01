const {hash, compare} = require("bcryptjs")
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

    async update(request, response){
        const {name, email, password, old_password} = request.body
        const {id} = request.params

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])
        
        if (!user){
            throw new AppError("Usuário não encontrado")
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id){
            throw new AppError("Este e-mail já está em uso.")
        }

        user.name = name
        user.email = email

        if(password && !old_password){
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha")
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkoldPassword){
                throw new AppError("A senha antiga não confere.")
            }
        }

    
        await database.run(
          ` UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = ?
            WHERE id = ? `,
            [user.name, user.email, user.password, new Date(), id]
        )

        return response.status(200).json()
    }
}


module.exports = UsersController