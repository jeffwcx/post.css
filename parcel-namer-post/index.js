const path = require("path")
const plugin = require("@parcel/plugin")

const namer = new plugin.Namer({
  name({bundle}) {
    const targetName = bundle.target.name;
    if (targetName === 'css-prod' || targetName === 'css-dev') {
      let filePath = bundle.getMainEntry().filePath;
      const basename = path.basename(filePath);
      if (['index.scss'].includes(basename)) {
        return targetName === 'css-prod' ? 'post.min.css' : 'post.css';
      }
    }
    return null;
  }
});

module.exports = namer;