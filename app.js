const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");

const generalRouters = require("./src/routers/general");

app.use(express.urlencoded({ extended : true }));
app.use(ejsLayouts);
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));

app.use("/", generalRouters);

app.listen(8000,()=>{
    console.log("8000 runs");
});