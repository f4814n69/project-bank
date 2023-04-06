require("dotenv").config();
const app = require("./app");
const { db } = require("./database/config");
db.authenticate()
  .then(() => {
    console.log("databaseauth");
  })
  .catch((error) => console.log(error));
db.sync()
  .then(() => {
    console.log("databasesync");
  })
  .catch((error) => console.log(error));
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
