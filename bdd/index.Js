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
  const avatar = 2;

  db.query(
    "INSERT INTO users (pseudo_user, first_name, family_name, mail, phone, password, avatar_id) VALUES  (?,?,?,?,?,?,?)",
    [username, firstName, lastName, email, phone, password, avatar],
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
  // Capture les valeurs du corps de la requête
  let username = request.body.nom;
  let password = request.body.password;
  console.log(username);
  console.log(password);
  // Executez une requête SQL pour vérifier les identifiants de l'utilisateur
  db.query(
    
    "SELECT * FROM users WHERE pseudo_user = ? AND password = ?",
    [username, password],
    
    function (error, results) {
      if (error) {
        // Gérer l'erreur de la requête SQL
        response.status(500).json({ error: "Erreur de base de données" });
        return;
      }
      // Vérifier si l'utilisateur existe dans la base de données
      if (results.length > 0) {
        // Authentifier l'utilisateur
        request.session.loggedin = true;
        request.session.username = username;
        // Rediriger vers la page d'accueil
        response.redirect("/app");
      } else {
        // Envoyer un message d'erreur si les identifiants sont incorrects
        response.status(401).json({ error: "Identifiants incorrects" });
        console.log(response);
      }
    }
  );
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