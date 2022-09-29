import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function createTeacher() {
  const result = await prisma.teachers.create({
    data: {
      name: "Teacher",
    }
  })

  console.log(result);
}

createTeacher();