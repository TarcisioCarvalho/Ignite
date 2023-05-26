import http from "node:http";

const server = http.createServer((req,res) => {
    const {method,url} = req;
    console.log(url);
    return res.end("Hello World 22233");
});

server.listen(3333);
