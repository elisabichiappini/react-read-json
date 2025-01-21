const dotenv = require("dotenv").config();

const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const readJSONData = (nomeFile) => {
    const filePath = path.join(__dirname, nomeFile + '.json');
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
}

const writeJSONData = (nomeFile, newData) => {
    const filePath = path.join(__dirname, nomeFile + '.json');
    const fileString = JSON.stringify(newData);
    fs.writeFileSync(filePath, fileString);
}
const server = require("http");
server.createServer((req, res,) => {
    res.writeHead(200,
        {
            "Content-type": "text/html; charset=utf-8"
        }
    );
    let fileHtml;
    switch(req.url) {
        case '/':
            const users = readJSONData('users');
            fileHtml = '<ul>' 
            users.forEach(u => fileHtml += `<li>${u.name}</li>`);
            fileHtml +='</ul>';
        break;
    }
    res.end(fileHtml)
}).listen(port, host, () => {
    console.log(`Server avviato su: http://${host}:${port}`);
});
