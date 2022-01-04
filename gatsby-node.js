const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: path.resolve(
      `src/templates/index-page.js`
    ),
    // additional data can be passed via context
    context: {},
  })

  createPage({
    path: '/welcome',
    component: path.resolve(
      `src/templates/welcome-page.js`
    )
  })

  createPage({
    path: '/detail',
    component: path.resolve(
      `src/templates/detail-page.js`
    )
  })

  createPage({
    path: '/vaccination',
    component: path.resolve(
      `src/templates/vaccination-page.js`
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
