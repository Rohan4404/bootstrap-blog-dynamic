// Jai Shree Ram

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const hbs = require("hbs");
const path = require("path");
const staticdata = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../tempPath/views");
const parthials = path.join(__dirname, "../tempPath/partials");
require("./db/conn");
const bloogCollection = require("./models/schema");
app.set("view engine", "hbs");
app.set("views", view_path);

// register partials
hbs.registerPartials(parthials);

app.use(express.static(staticdata));
//For data can read easyly
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs");
});

app.get("*", (req, res) => {
  res.status(404).render("404Error.hbs");
});

// createData
app.post("/contact", async (req, res) => {
  try {
    const blogdata = new bloogCollection({
      email: req.body.email,
      quary: req.body.quary,
      member: req.body.member,
      concern: req.body.concern,
    });
    const registerBlog = await blogdata.save();
    res.status(201).render("index");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`now it is live at port number ${port}`);
});
