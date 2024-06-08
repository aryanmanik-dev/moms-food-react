const express = require("express");
const router = require("./routes/UserRoute");
const app = express();

require("./DB/db");
app.use(express.json());
app.use(router)

// app.get("/", (req,res) => {
//     res.send(`Working`)
// //   console.log("checking");
// });

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
