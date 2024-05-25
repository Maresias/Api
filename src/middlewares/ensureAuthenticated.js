const [ verify ] = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")


function ensureAuthentid(request, response, next){
    const authHeader = request.headers.authorization

    if (!authHeader){
        throw new AppError("JWT Token inválido", 401)
    }

    const [, token ] = authHeader.split(" ")

    try{

    }catch{
        
    }
}