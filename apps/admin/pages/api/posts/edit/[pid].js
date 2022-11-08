import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const { pid } = req.query;
  const {
    title,
    content,
    user,
    rendered,
    slug,
    status,
    type,
    post_link,
    media_featured,
    modified_by,
    excerpt,
    revisions,
    categoryList,
    tagList,
  } = req.body;

  const result = await prisma.post.update({
    where: { id: pid },
    data: {
      title: title,
      content: content,
      user: user,
      rendered: rendered,
      slug: slug,
      status: status,
      type: type,
      post_link: post_link,
      media_featured: media_featured,
      modified_by: modified_by,
      excerpt: excerpt,
      revisions: revisions,
      categoryList: categoryList,
      tagList: tagList,
    },
  });
  res.json(result);
}
