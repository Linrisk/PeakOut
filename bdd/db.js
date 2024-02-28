const mysql = require('mysql');
const db = mysql.createConnection({
    host: "bb621576-002.eu.clouddb.ovh.net",
    port: 35512, // Port de la base de données
    user: "user_app",
    password: "AFpDtdTL2B0WssHR",
    database: "peak_out"
});

// Connectez-vous à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connexion à la base de données réussie');
});

module.exports = db;
