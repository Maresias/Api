const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class userAvatarController {
    async update(request, response){
        const user_id = request.user.id
        const avatarFilename = request.file.filename

        const user = await knex("users").where({id: user_id}).first()
    }
}