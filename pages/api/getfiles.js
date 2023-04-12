const fs = require("fs");
const path = require("path");
// It is just for creating and endpoint like a api
const directoryPath = "blogdata";

export default async function handler(req, res) {
  let data = await fs.promises.readdir(directoryPath);
  let myfile,
    allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const file = data[index];
    console.log(file);
    myfile = await fs.promises.readFile(`blogdata/${file}`, "utf-8");
    allblogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allblogs);
}
