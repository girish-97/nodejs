const http = require("http");
const handler = require("./routes");


const server = http.createServer(handler);


// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//       res.write('<html>');
//       res.write('<head><title>Enter Message</title><head>');
//       res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//       res.write('</html>');
//       return res.end();
//     }
//     if (url === '/message' && method === 'POST') {
//       const body = [];
//       req.on('data', (chunk) => {
//         body.push(chunk);
//       });
//       req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString();
//         const message = parsedBody.split('=')[1];
//         fs.writeFile('message.txt', message, err => {
//             fs.readFile("message.txt", "utf8", (err, data) => {
//                 res.write('<html>');
//                 res.write('<head><title>Enter Message</title><head>');
//                 res.write(`<body><h2>${data}</h2></body>`);
//                 res.write('</html>');
//                 return res.end();
//             })
//         });
//       });
//     }
// })

server.listen(3000);