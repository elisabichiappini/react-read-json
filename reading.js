const dotenv = require("dotenv").config();
const server = require("http");

const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 4000;
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

server.createServer((req, res,) => {
    
    const users = readJSONData('users');
    let fileHtml;
    switch(req.url) {
        case '/favicon.ico': 
        res.writeHead(404,
            {
                "Content-type": "text/html; charset=utf-8"
            }
        );
            res.end();
        break;
        case '/':
            res.writeHead(200,
                {
                    "Content-type": "text/html; charset=utf-8"
                }
            );
            fileHtml = '<ul>' 
            users.forEach(u => fileHtml += `<li>${u.name}</li>`);
            fileHtml +='</ul>';
        break;
        default: 
            const name = req.url.slice(1);
            res.writeHead(301,
                {
                    "Location": "/"
                }
            );
            writeJSONData('users', [...users, { name }]);
        break;
    }
    res.end(fileHtml)
}).listen(port, host, () => {
    console.log(`Server avviato su: http://${host}:${port}`);
});
