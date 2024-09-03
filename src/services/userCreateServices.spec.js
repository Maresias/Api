const UserCreateServices = require("./UserCreateServices")
const UserRepositoriesInMemory = require("../repositories/UserRepositoriesInMemory")
const AppError = require("../utils/AppError")

describe("UserCreateServices", () => {
    let userRepositoriesInMemory = null
    let userCreateServices = null

    beforeEach(() =>{
        userRepositoriesInMemory = new UserRepositoriesInMemory()
        userCreateServices = new UserCreateServices(userRepositoriesInMemory)
    })

    it("user should be create",  async () => {

        const user = {
            name: "User test",
            email: "user@test.com",
            password: "123"
        }
    
        const userCreated =  await userCreateServices.execute(user)
    
        expect(userCreated).toHaveProperty("id")
    })

    it("user not shold be create with exists email", async ( ) =>{
        const user1 = {
            name: "User test 1",
            email: "test@test.com",
            password: "123"
        }

        const user2 = {
            name: "User test 2",
            email: "test@test.com",
            password: "456"
        }

        await userCreateServices.execute(user1)
        await expect(userCreateServices.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso"))
    })
})

