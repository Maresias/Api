const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class UserAvatarController {
    async update(request, response){
        const user_id = request.user.id
        const avatarFilename = request.file.filename

        const diskStorage = new DiskStorage()

        const user = await knex("users").where({id: user_id}).first()

        if(!user){
            throw new AppError("Somente usúarios autenticados poder mudar o avatar", 401)
        }

        if (user.avater){
            await diskStorage.deleteFile(user.avater)
        }

        const filename = await diskStorage.saveFile(avatarFilename)
        user.avater = filename

        await knex("users").update(user).where({ id: user_id})

        return response.json(user)
    }
}


module.exports = UserAvatarController