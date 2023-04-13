const fs = require('fs');
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await fs.promises.readdir('contactdata');
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));
        // Process a POST request
        res.status(200).send(req.body);
    } else {
        // Handle any other HTTP method
        res.status(200).send([
            "allblogs"
        ])
    }
}