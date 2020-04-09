import camelCase from "lodash.camelcase"

export const getAssets = allFile =>
  allFile.nodes.reduce(
    (obj, node) => ({
      ...obj,
      [camelCase(node.name)]: node.publicURL,
    }),
    {}
  )
