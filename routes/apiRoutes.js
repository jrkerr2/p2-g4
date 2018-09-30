const db = require("../models");

const api_routes =  app => {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then( dbExamples => {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then( dbExample => {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then( dbExample => {
      res.json(dbExample);
    });
  });
};

module.exports = api_routes;
