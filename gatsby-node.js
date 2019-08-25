//This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log('jeffrey')
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}