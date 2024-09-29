const { PrismaClient } = require("@prisma/client");
const { emit } = require("process");
const prisma = new PrismaClient()

async function insertNewUser({ email, hashedPassword, username, gender }) {
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username: username,
        gender: gender
      },
    });
  }


module.exports = {
    insertNewUser
}
