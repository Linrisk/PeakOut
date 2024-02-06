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
app.post("/api/createUser", (req, res) => {
  console.log("API / CREATE USER CHECK");
  console.log(req);
  console.log("REP BODY");
  console.log(req.body);
  const username = req.body.userName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;

  db.query(
    "INSERT INTO user (pseudo_user, firstName_user, lastName_user, mail_user, phone_user) VALUES  (?,?,?,?,?)",
    [username, firstName, lastName, email, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.post("/api/test", function(req, res) {
    console.log("API / TEST CHECK");
    res.send("OK");
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
      "SELECT * FROM test_user WHERE pseudo_user = ? AND phone_user = ?",
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
