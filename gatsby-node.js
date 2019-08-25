//This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log('jeffrey')
    //function to create slug
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
}