import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();


async function main(courseId: string) {
  const result = await prisma.courses.update({
    where: {
      id: courseId,
    },
    data: {
      duration: 199,
    }
  })


  console.log(result)
}


main("a41cdb93-d51e-4c1c-88a9-6b83ed5b8662")