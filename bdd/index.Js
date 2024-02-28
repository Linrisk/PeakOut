const express = require("express");
const db = require("./db");
const cors = require("cors");
const session = require("express-session");
const app = express();
const PORT = 3002;

app.use(express.json());

// Use cors middleware without manual headers
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Route for creating a user
app.post("/api/createUser", (req, res) => {
  const username = req.body.userName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;

  db.query(
    "INSERT INTO test_user (null, post_text, user_name) VALUES (?,?,?)",
    [title, text, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
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
