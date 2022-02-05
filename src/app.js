const express = require("express");
const routes = require("./routes/main");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use("", routes);

// ( hbs template engine config)
app.set("view engine", "hbs");
app.set("views", "views");

hbs.registerPartials("views/partials");

// DB connection
mongoose.connect("mongodb://localhost:27017/node_website", () => {
  console.log("Database connection established...");

  // Services data ----------------------------------------------------------------------------------------
  // Service.create([
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best courses",
  //     description:
  //       "We provide courses for students for their bright future in placements and for their success",
  //     linkText: "Check",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best courses",
  //     description:
  //       "We provide courses for students for their bright future in placements and for their success",
  //     linkText: "Check",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best courses",
  //     description:
  //       "We provide courses for students for their bright future in placements and for their success",
  //     linkText: "Check",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best courses",
  //     description:
  //       "We provide courses for students for their bright future in placements and for their success",
  //     linkText: "Check",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best courses",
  //     description:
  //       "We provide courses for students for their bright future in placements and for their success",
  //     linkText: "Check",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best courses",
  //     description:
  //       "We provide courses for students for their bright future in placements and for their success",
  //     linkText: "Check",
  //     link: "https://www.google.com",
  //   },
  // ]);

  // slider data  -----------------------------------------------------------------------------
  // Slider.create([
  //   {
  //     title: "Slider one title text here.",
  //     subTitle: "subtitle of slider one",
  //     imageUrl: "/static/images/s1.jpg",
  //   },
  //   {
  //     title: "Slider two title text here.",
  //     subTitle: "subtitle of slider two",
  //     imageUrl: "/static/images/s2.jpg",
  //   },
  //   {
  //     title: "Slider three title text here.",
  //     subTitle: "subtitle of slider three",
  //     imageUrl: "/static/images/s3.jpg",
  //   },
  //   {
  //     title: "Slider four title text here.",
  //     subTitle: "subtitle of slider four",
  //     imageUrl: "/static/images/s4.jpg",
  //   },
  // ]);

  // Navbar Data  -----------------------------------------------------------------------------
  // Detail.create({
  //   brandName: "Krishna's Solutions Pvt. Ltd.",
  //   brandIconUrl: "./static/images/logo.jpg",
  //   links: [
  //     {
  //       label: "Home",
  //       url: "/",
  //     },
  //     {
  //       label: "Services",
  //       url: "/services",
  //     },
  //     {
  //       label: "Gallery",
  //       url: "/gallery",
  //     },
  //     {
  //       label: "About",
  //       url: "/about",
  //     },
  //     {
  //       label: "Contact Us",
  //       url: "/contact-us",
  //     },
  //   ],
  // });
});

app.listen(process.env.PORT | 2000, () => {
  console.log("server started...");
});
