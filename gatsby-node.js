const path = require("path")
const crypto = require(`crypto`)

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}

// Create content node for parsing strapi markdown to mdx
module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  if (node.internal.type === "StrapiBlogs") {
    const newNode = {
      id: createNodeId(`StrapiBlogsContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiBlogsContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    }
    actions.createNode(newNode)
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    })
  }
}
