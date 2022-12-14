import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createOneCurse() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso Elixir",
      description: "A Elixir  curse with focus on the web development service.",
      duration: 60,
      teacher: {
        create: {
          name: "Fernando-Joseph"
        }
      }
    }
  });


  console.log(result);
}

createOneCurse();