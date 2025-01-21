// const dotenv = require("dotenv").config();

// const server = require("http");
// const port = process.env.PORT || 1234;
// const host = process.env.HOST || "localhost";
// server.createServer((req, res,) => {
//     res.writeHead(200,
//         {
//             "Content-type":"text/html"
//         }
//     );
//     res.end("<h1>ciao sono collegato</h1>");
// }).listen(port, host, () => {
//     console.log(`Server avviato su: http://${host}:${port}`);
// });

const fs = require("fs");
const path = require("path");

const loadData = (nomeFile) => {
    const filePath = path.join(__dirname, nomeFile + '.json');
    const fileData = fs.readFileSync(filePath, "utf-8");
    
    return JSON.parse(fileData);
}

const users = loadData('users');
console.log(users); //[]