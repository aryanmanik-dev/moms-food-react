const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/momsfood";
mongoose
  .connect(db,{
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(`Database Error ${err}`);
  });
