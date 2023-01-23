const http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Dominos!<h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );
  } else {
    res.writeHead(404,{"Content-Type": "text/html" });
    res.write("<h1>404 Not Found<h1>")
  }
  res.end();
}
httpServer.listen(8081,()=>console.log("server started"));

module.exports = httpServer;