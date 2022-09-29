import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createOneCurse() {
  const result = await prisma.courses.create({
    data: {
      name: "React Native",
      description: "A react Native curse with focus on the web development service.",
      duration: 60,
      teacher: {
        create: {
          name: "Fernando Joseph"
        }
      }
    }
  });


  console.log(result);
}

createOneCurse();