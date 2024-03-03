const knex = require("../database/knex")

class NotesController{
    async create(request, response){
        const {title, description, tags, links} = request.body
        const { user_id} = request.params

        const [ note_id] = await knex("notes").insert({
            title,
            description,
            user_id
        })

        const linksInsert = links.map(links =>{
            return{
                note_id,
                url: links
            }
        })

        await knex("links").insert(linksInsert)

        const tagsInsert = tags.map(name =>{
            return {
                note_id,
                name,
                user_id
            }
        })

        await knex("tags").insert(tagsInsert)

        response.json()
    }

    async show(request, response){
        const { id } = request.params

        const note  = await knex("notes").where({id}).first()

        return response.json(note)
    }
}

module.exports = NotesController
