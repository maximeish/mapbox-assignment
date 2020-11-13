const Express = require("express");
const { join } = require("path");
const app = Express();
require("dotenv").config();

app.use(Express.static(join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
