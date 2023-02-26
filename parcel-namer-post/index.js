const path = require("path")
const plugin = require("@parcel/plugin")

const namer = new plugin.Namer({
  name({bundle}) {
    const targetName = bundle.target.name;
    if (targetName.startsWith('post')) {
      let filePath = bundle.getMainEntry().filePath;
      const basename = path.basename(filePath);
      if ([
        'index.scss',
        'default.scss',
        'dark.scss',
        'blue.scss',
        'blue.dark.scss'
      ].includes(basename)) {
        return `${targetName}.css`;
      }
    }
    return null;
  }
});

module.exports = namer;