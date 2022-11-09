import prisma from "../../../lib/prisma";

export default async function getAllPosts() {
  const postList1 = await prisma.post.findMany();
  const postList = JSON.stringify(postList1);
  return postList;
}
