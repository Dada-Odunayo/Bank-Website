const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const dbConnection = require("./config/db");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);
PORT = process.env.PORT;

//Registration API
app.post("/register", async (req, res) => {
  const fname = req.body.fname;
  const password = req.body.password;
  const lname = req.body.lname;
  const email = req.body.email;
  const dob = req.body.dob;

  const hashedPassword = bcrypt.hashSync(password, 10);
  await dbConnection.execute(
    `INSERT INTO users (fname,lname,password,email,dob) VALUES ('${fname}','${lname}','${hashedPassword}','${email}','${dob}')`
  );
});

//Login API
app.get("/", (req, res) => {
  res.send("Get request working");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  dbConnection.execute("SELECT * FROM users WHERE email = ?;", [email], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "Wrong username/ password comination!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exists" });
    }
  });
});

/*app.post("/deposit", (req, res) => {
  const fname = req.body.fname;
  const balance = req.body.balance;
  conn.execute(`UPDATE  users SET balance = '${balance}' WHERE fname= '${fname}'`);
});*/

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
