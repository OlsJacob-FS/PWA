const express = require("express");
//require Routes through routeHandler
const routeHandler = require("./routes/singup");
const app = express();
app.use(express.json());
//Body Parser
app.use(express.urlencoded({ extended: true }));
//routeHandler function for signup routes
app.use("/api", routeHandler);
//PORT 3000
const PORT = 3000;
//listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
