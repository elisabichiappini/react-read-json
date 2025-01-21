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

const filePath = path.join(__dirname, "users.json");
const fileData = fs.readFileSync(filePath, "utf-8");

const users = JSON.parse(fileData);
console.log(users);