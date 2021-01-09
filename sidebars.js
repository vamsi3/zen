const fs = require("fs")
const path = require("path")

toTitleCase = str => {
  var upper = true, newStr = ""
  for (const c of str) {
    if (c == "-") {
      newStr += " "
      upper = true
    } else {
      newStr += upper ? c.toUpperCase() : c
      upper = false
    }
  }
  return newStr
}

sidebarConfig = (base, dir = '') => {
  var fileConfig = [], dirConfig = []
  fs.readdirSync(path.join(base, dir)).forEach(file => {
    const ext = path.extname(file)
    if (['.md', '.mdx'].includes(ext)) {
      fileConfig.push(
        path.join(dir, path.basename(file, ext)),
      )
    } else {
      dirConfig.push(
        {
          type: 'category',
          label: toTitleCase(file),
          collapsed: false,
          items: sidebarConfig(base, path.join(dir, file)),
        }
      )
    }
  })
  return [...fileConfig, ...dirConfig]
}

module.exports = {
  sidebarDocs: sidebarConfig('./docs')
};
