const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// Route for creating a user
app.post("/api/createUser", (req) => {
  console.log("API / CREATE USER CHECK");
  console.log(req);
  console.log("REP BODY");
  console.log(req.body);
  const username = req.body.userName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (pseudo_user, first_name, family_name, mail, phone, password) VALUES  (?,?,?,?,?,?)",
    [username, firstName, lastName, email, phone, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.post("api/test", function () {
  console.log("API / TEST CHECK");
});

// http://localhost:3000/auth
app.post("/api/connectUser", function (request, response) {
  // Capture the input fields
  let username = request.body.username;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM users WHERE pseudo_user = ? AND phone = ?",
      [username, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = username;
          // Redirect to home page
          response.redirect("/home");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

app.post("/api/getInfoUsers", function(request){
    connection.query(
      "SELECT * FROM users WHERE pseudo_user = ?", [username],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {

        } else {
          response.send("Data not load!");
        }
        response.end();
      }
    );
});

//app.post("/api/getInfoEventsUsers", function(request)){
//app.post("/api/getInfoEvents", function(request)){