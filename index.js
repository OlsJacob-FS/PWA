const express = require("express");
const app = express();
//PORT 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`App listenig on post: ${PORT}`));

app.use(express.json());
//routeHandler function for signup routes
app.use("/v1", routeHandler);
