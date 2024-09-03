const UserCreateServices = require("./UserCreateServices")
const UserRepositoriesInMemory = require("../repositories/UserRepositoriesInMemory")

describe("UserCreateServices", () => {
    
    it("user should be create",  async () => {

        const user = {
            name: "User test",
            email: "user@test.com",
            password: "123"
        }
    
        const userRepositoriesInMemory = new UserRepositoriesInMemory()
        const userCreateServices = new UserCreateServices(userRepositoriesInMemory)
        const userCreated =  await userCreateServices.execute(user)
    
        expect(userCreated).toHaveProperty("id")
    })
})

