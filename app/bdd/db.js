const mysql = require('mysql')
const db = mysql.createConnection({
host: "aws.connect.psdb.cloud",
user: "oebvb61m4povburpql2h",
password: "pscale_pw_B2rvAriIlAjKoZHyDvMDew29xZeGiFRoYryUltih29L",
database:"peak-out" 
})

module.exports = db;
