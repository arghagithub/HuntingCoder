// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

export default function handler(req, res) {
  fs.readFile("blogdata/how_to_learn_flask.json", "utf8",  (err, data) => {
    if (err) {
      console.log(err);
      res.json(err);
      return;
    }
    const json=JSON.parse(data);
    res.json(json);
  });
  // res.status(200).json({ name: "John Doe" });
}
