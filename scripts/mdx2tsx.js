const unified = require('unified')
const stream = require('unified-stream')
const markdown = require('remark-parse')
const stringify = require('remark-stringify')
const mdx = require('remark-mdx')
const filter = require('unist-util-filter')
const find = require('unist-util-find')
const map = require('unist-util-map')

const extract = () => tree =>
  filter(
    tree,
    { cascade: false },
    node =>
      node.type === 'root' || node.type === 'jsx' || node.type === 'import'
  )

const IMPORT_REACT = '// @ts-ignore\nimport * as React from "react"'
const importReact = () => tree => {
  const node = find(tree, { type: 'import' })
  if (node) {
    // Prepend React import
    node.value = `${IMPORT_REACT}\n${node.value}`
  } else {
    // Add import node if no import declarations
    tree.children.splice(0, 0, {
      type: 'import',
      value: IMPORT_REACT,
    })
  }
  return tree
}

const wrapJsx = () => tree => {
  return map(tree, (node, index) => {
    return node.type === 'jsx'
      ? {
          ...node,
          type: 'export',
          value: `export const _c${index} = () => (\n${node.value}\n)`,
        }
      : node
  })
}

const tsIgnore = () => tree => {
  return map(tree, (node, index) => {
    return node.type === 'import' && node.value.includes('.png')
      ? {
          type: 'import',
          value: `// @ts-ignore\n${node.value}`,
        }
      : node
  })
}

const processor = unified()
  .use(markdown)
  .use(stringify)
  .use(mdx)
  .use(extract)
  .use(wrapJsx)
  .use(tsIgnore)
  .use(importReact)

process.stdin.pipe(stream(processor)).pipe(process.stdout)
