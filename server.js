require("dotenv").config();
const express    = require("express");
const bodyParser = require("body-parser");
const exphbs     = require("express-handlebars");
const apiRoutes  = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
//better method, than using the require -> still not that great.
//adding to a const variable. then passing app to the api routes function.
//initializing the app with each route. 
apiRoutes(app);
htmlRoutes(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") syncOptions.force = true;


//Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
