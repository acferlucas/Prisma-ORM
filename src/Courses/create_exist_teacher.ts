import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createOneCurse() {
  const result = await prisma.courses.create({
    data: {
      name: "Java",
      description: "A Java curse with focus on the web development service.",
      duration: 60,
      teacher: {
        connect: {
          id: "bffdc6d7-a2ab-4694-bf09-d49c07d6ade2",
        }
      }
    }
  });


  console.log(result);
}

createOneCurse();