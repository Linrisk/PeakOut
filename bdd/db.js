const mysql = require('mysql')
const db = mysql.createConnection({
host: "bb621576-002.eu.clouddb.ovh.net:35512",
user: "user_app",
password: "AFpDtdTL2B0WssHR",
database:"peak_out" 
})

/*ssl: {
    ca: fs.readFileSync('path/to/ca.pem'),
    key: fs.readFileSync('path/to/client-key.pem'),
    cert: fs.readFileSync('path/to/client-cert.pem')
  }
})*/
module.exports = db;