// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//  http://localhost:3000/api/getblog?slug=how_to_learn_flask
const fs = require("fs");

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8",  (err, data) => {
    if (err) {
      console.log(err);
      res.json({error:"No such blog found"});
      return;
    }
    const json=JSON.parse(data);
    res.json(json);
  });
}
