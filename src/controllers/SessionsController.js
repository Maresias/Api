const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")

const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")


class SessionsController {
    async create(request, response ) {
        const { email, password } = request.body
        const user = await knex("users").where({email}).first()

        if (!user){
            throw new AppError("E-mail e/ou senha incorreta")
        }

        const passwordMatched = await compare(password, user.password)

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta")
        }

        
        
        return response.json(user)
    }
}

module.exports = SessionsController