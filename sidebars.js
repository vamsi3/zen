const fs = require("fs")
const path = require("path")

toTitleCase = str => {
  var upper = true
  var newStr = ""
  for (const c of str) {
      if (c == "-") {
          upper = true
          newStr += " "
      } else {
        newStr += upper ? c.toUpperCase() : c
        upper = false
      }
  }
  return newStr
}

sidebarConfig = (base, dir = '') => {
  var config = []
  fs.readdirSync(path.join(base, dir)).forEach(file => {
    const ext = path.extname(file)
    if (['.md', '.mdx'].includes(ext)) {
      config.push(
        {
          type: 'doc',
          id: path.join(dir, path.basename(file, ext)),
        }
      )
    } else {
      config.push(
        {
          type: 'category',
          label: toTitleCase(file),
          collapsed: false,
          items: sidebarConfig(base, path.join(dir, file)),
        }
      )
    }
  })
  return config
}

module.exports = {
  sidebarDocs: sidebarConfig('./docs')
};
