const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
app.use(cors());

const port = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("working send post request to /bfhl");
});

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    const user_id = "harshit571";
    const email = "harshit0571.be21@chiktara.edu.in";
    const roll_number = "0571";
    const even_numbers = data.filter((num) => num % 2 === 0);
    const odd_numbers = data.filter(num => !isNaN(parseInt(num)) && parseInt(num) % 2 !== 0);
    const alphabets = data
      .filter((char) => isNaN(char))
      .map((char) => char.toUpperCase());

    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
