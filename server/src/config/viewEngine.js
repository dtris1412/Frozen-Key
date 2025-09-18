import express from "express";

let configViewEngine = (app) => {
  //set the view engine to ejs
  app.set("view engine", "ejs");
  //set the views directory
  app.set("views", "./src/views");
  //set the static files directory
  app.use(express.static("./src/public"));

  return app;
};
export default configViewEngine;
