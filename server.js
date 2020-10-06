require("dotenv").config();
const express = require("express");
const session = require("express-session");

const PORT = process.env.PORT || 3001;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("client/build"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

// Requiring our routes
require("./routes/html-routes.js")(app);

app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

// Syncing our database and logging a message to the user upon success

  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
