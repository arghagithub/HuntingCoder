const fs = require("fs");
const path = require("path");

const directoryPath = "blogdata";

export default function handler(req, res) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        console.log(path.join(directoryPath, file));
        res.json(files);
      });
    }
  });
}
