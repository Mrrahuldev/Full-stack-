var http=require("http");
const server=http.createServer((req,res) => {
    console.log(req.url);
    res.write("<h1>hello</h1>");
    res.end();
});
server.listen(8080, () => {
    console.log("server is listening on port 8080");
})