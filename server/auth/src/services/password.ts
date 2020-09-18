import bcrypt from 'bcryptjs'

export class Password {
  static async toHash(password: string) {
    return bcrypt.hashSync(password)
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    return bcrypt.compareSync(suppliedPassword, storedPassword)
  }
}
