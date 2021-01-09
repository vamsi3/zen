const fs = require("fs")
const path = require('path');

sidebarConfig = (base, dir = '') => {
  var config = []
  fs.readdirSync(path.join(base, dir)).forEach(file => {
    const ext = path.extname(file)
    if (['.md', '.mdx'].includes(ext)) {
      config.push(
        path.join(dir, path.basename(file, ext))
      )
    } else {
      config.push(
        {
          type: 'category',
          label: file,
          items: sidebarConfig(base, path.join(dir, file))
        }
      )
    }
  })
  return config
}

module.exports = {
  sidebarDocs: sidebarConfig('./docs')
};
