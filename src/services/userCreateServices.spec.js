const UserCreateServices = require("./UserCreateServices")

 it("user should be create",  async () => {
    const user = {
        name: "User test",
        email: "user@test.com",
        password: "123"
    }

    const userCreateServices = new UserCreateServices()
    const userCreated =  await userCreateServices.execute(user)

    expect(userCreated).toHaveProperty("id")
})