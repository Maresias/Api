class UserCreateServices {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute ({ name, email, password }){
        const checkUserExists = await this.userRepository.findByEmail(email)

        if ( checkUserExists ) {
            throw new AppError("Este e-mail já está em uso")
        }

        const hashedPassword = await hash(password, 8)

        await this.userRepository.create({ name, email, password: hashedPassword})
    }
}

module.exports = UserCreateServices
