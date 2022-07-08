const http = require("http");

const server = new http.createServer((requestObject, responseObject) => {
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");
  if (url === "/") {
    responseObject.write(
      "<h1>Welcome to my page</h1> \n <h2>This is my Homepage</h2>"
    );
  }
  if (url === "/profile") {
    responseObject.write(
      "<h1>Welcome to my page</h1> \n <h2>This is my Profile</h2>"
    );
  }
  if (url === "/about") {
    responseObject.write(
      "<h1>Welcome to my page</h1> \n <h2>This is my About</h2>"
    );
  }
  if (url === "/contact") {
    responseObject.write(
      "<h1>Welcome to my page</h1> \n <h2>This is my contact</h2>"
    );
  }
  responseObject.end();
});
server.listen(3000, () => {
  console.log("server running on port:3000");
});
