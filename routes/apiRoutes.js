var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // get ALL USERS
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // get ALL USERS
  app.get("/api/meds", function(req, res) {
    db.med.findAll({}).then(function(dbmed) {
      res.json(dbmed);
    });
  });

//   db.Outlet.findAll({include: [
//     {model:db.Product, attributes: ['id', 'name', 'nameKh']}
//     ]}).then(function(outlets){
//     return res.jsonp(outlets);
// })

  // get specific USER
  app.get("/api/users/:id", function(req, res) {
    db.user.findAll({ where: { id: req.params.id } }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new example
  app.post("/api/login", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      //res.json(dbExample);
      res.redirect("/index");
    });
  });

  // Create a new USER
  app.post("/api/users", function(req, res) {
    db.user.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    });
  });

   // Create a new USER with MEDs
   app.post("/api/usermeds", function(req, res) {
    console.log(req.body);
    db.user.create(req.body,{
      include: [{
        as: "meds",
        model: db.med,
        //include: [{
        //  med_id: db.med.med_id,
        //  med_name: db.med.med_name

        //}]

      }]

    }).then(function(dbuser) {
      res.json(dbuser);
    });

  });

//   models.Survey.create(survey,{
//     include:  [models.Question,{include: [models.Option]}]
//   }).then(function() {
// reply({success:1});
// });

  // Create a new MED
  app.post("/api/meds", function(req, res) {
    console.log(req.body);
    db.med.bulkCreate(req.body).then(function(dbmed) {
      res.json(dbmed);
    });
  });

  // Delete an example by id

    });
  });



  app.post("/api/users", function (req, res) {
    db.user.create(req.body).then(function (dbuser) {
      console.log('we hit it');
      res.json(dbuser);
      console.log(dbuser)
    });
  });


};
