var db = require("../models");

//module.exports = function(app) {
const html_routes = app => {  
// Load index page
  app.get("/", (req, res) => {
    db.Example.findAll({}).then( dbExamples => {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then( dbExample => {
      res.render("example", {
        example: dbExample
      });
   });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};

module.exports = html_routes;

//this will need a bit of reworking once the database is added.
//essentially puting the app.get into a conditional switch statement
//to send user to the correct page. 
// const html_routes = app => {

//   app.get("/:routes?", ( req, res ) => {
//     let URL = req.param.routes;

//     switch ( URL ){
//       case "home":
//         console.log(`We've made it to the homepage \n`);

//         return res.sendFile(path.join(__dirname, "../views/start.handlebars"));
//         break;
//       case "inputs": //name should be changed.
//         console.log(`We've made it to the input page \n`);

//         return res.sendFile(path.join(__dirname, "../views/example.handlebars"));
//         break;
//       default:
//         res.render("404");
//     }

//   })
// }
