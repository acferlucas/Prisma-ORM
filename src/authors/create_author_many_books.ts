import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.authors.create({
    data: {
      name: "Lucas Acfer S.",
      Books: {
        createMany: {
          data: [
            { name: "Como Programar ?" },
            { name: "Orientação a objetos com Java" },
            { name: "O basico de c++" },
            { name: "A base do ReactJs" },
          ],
        }
      }
    }
  })


  console.log(result);
};

create();