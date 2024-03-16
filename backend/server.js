const app = require("./app");
const env = require("dotenv");
const connectDatabase = require("./config/db");

env.config({ path: "backend/config/config.env" });

//connecting to Database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server woring on http://localhost:${process.env.PORT}`);
});
