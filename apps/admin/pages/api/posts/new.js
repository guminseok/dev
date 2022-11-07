import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  console.log("req.body", req.body);
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

  try {
    const result = await prisma.post.create({
      data: {
        title: title == null ? "" : title,
        content: content == null ? "" : content,
        user: user == null ? "" : user,
        rendered: rendered == null ? "" : rendered,
        slug:slug,
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
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ error: err });
  }
}
