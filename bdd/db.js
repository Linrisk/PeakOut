const mysql = require('mysql')
const db = mysql.createConnection({
host: "aws.connect.psdb.cloud",
user: "oebvb61m4povburpql2h",
password: "pscale_pw_B2rvAriIlAjKoZHyDvMDew29xZeGiFRoYryUltih29L",
database:"peak-out",
ssl: {
    ca: fs.readFileSync('path/to/ca.pem'),
    key: fs.readFileSync('path/to/client-key.pem'),
    cert: fs.readFileSync('path/to/client-cert.pem')
  }
})

module.exports = db;
