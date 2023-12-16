const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connection sucessfull............");
  })
  .catch((err) => {
    console.log(err);
  });
