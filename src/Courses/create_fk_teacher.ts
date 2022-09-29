import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createOneCurse() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso Frontend",
      description: "A Front  curse with focus on the web development service.",
      duration: 289,
      teachersId: "b00d37d9-c869-4144-9b6b-4d8ae9a20083",
    }
  });


  console.log(result);
}

createOneCurse();