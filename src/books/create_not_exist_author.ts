import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const result = await prisma.books.create({
    data: {
      name: "Clear Code",
      author: {
        create: {
          name: "Joseph"
        }
      },
    }
  });


  console.log(result);
};

create();