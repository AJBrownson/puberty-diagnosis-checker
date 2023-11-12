const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.post("/api/pubertyOnset", (req, res) => {
  const { bmi, obesity, genetics } = req.body;

  // If...else rules for computing the 
  let result;

  // rule 1
  if ( 
    (bmi >= 0 && bmi <= 30) &&
    (obesity === 'Not Obese') &&
    (genetics === 'Late')
  ) {
    result = "Delayed";

    // rule 2
  } else if (
    (bmi >= 0 && bmi <= 30) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 29 && genetics <= 80)
  ) {
    result = "Delayed";

    // rule 3
  } else if (
    (bmi >= 0 && bmi <= 30) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 78 && genetics <= 100)
  ) {
    result = "Normal";

    // rule 4
  } else if (
    (bmi >= 28 && bmi <= 85) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 0 && genetics <= 30)
  ) {
    result = "Delayed";

    // rule 5
  } else if (
    (bmi >= 28 && bmi <= 85) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 29 && genetics <= 80)
  ) {
    result = "Normal";

    // rule 6
  } else if (
    (bmi >= 28 && bmi <= 85) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 78 && genetics <= 100)
  ) {
    result = "Normal";

        // rule 7
  } else if (
    (bmi >= 83 && bmi <= 100) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 0 && genetics <= 30)
  ) {
    result = "Normal";

    // rule 8
  } else if (
    (bmi >= 83 && bmi <= 100) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 29 && genetics <= 80)
  ) {
    result = "Normal";

    // rule 9
  } else if (
    (bmi >= 83 && bmi <= 30) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 78 && genetics <= 100)
  ) {
    result = "Normal";

    // rule 10
  } else if ( 
    (bmi >= 0 && bmi <= 30) &&
    (obesity >= 0 && obesity <= 40) &&
    (genetics >= 0 && genetics <= 30)
  ) {
    result = "Delayed";

   // rule 11
 } else if (
   (bmi >= 0 && bmi <= 30) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 29 && genetics <= 80)
 ) {
   result = "Delayed";

   // rule 12
 } else if (
   (bmi >= 0 && bmi <= 30) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 78 && genetics <= 100)
 ) {
   result = "Normal";

   // rule 13
 } else if (
   (bmi >= 28 && bmi <= 85) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 0 && genetics <= 30)
 ) {
   result = "Delayed";

   // rule 14
 } else if (
   (bmi >= 28 && bmi <= 85) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 29 && genetics <= 80)
 ) {
   result = "Normal";

   // rule 15
 } else if (
   (bmi >= 28 && bmi <= 85) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 78 && genetics <= 100)
 ) {
   result = "Normal";

   // rule 16
 } else if (
   (bmi >= 83 && bmi <= 100) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 0 && genetics <= 30)
 ) {
   result = "Normal";

   // rule 17
 } else if (
   (bmi >= 83 && bmi <= 100) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 29 && genetics <= 80)
 ) {
   result = "Normal";

   // rule 18
 } else if (
   (bmi >= 83 && bmi <= 30) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 78 && genetics <= 100)
 ) {
   result = "Normal";

   // rule 19
 } else if (
   (bmi >= 0 && bmi <= 30) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 29 && genetics <= 80)
 ) {
   result = "Delayed";

   // rule 20
 } else if (
   (bmi >= 0 && bmi <= 30) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 78 && genetics <= 100)
 ) {
   result = "Normal";

   // rule 23
 } else if (
   (bmi >= 28 && bmi <= 85) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 0 && genetics <= 30)
 ) {
   result = "Delayed";

   // rule 24
 } else if (
   (bmi >= 28 && bmi <= 85) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 29 && genetics <= 80)
 ) {
   result = "Normal";

   // rule 25
 } else if (
   (bmi >= 28 && bmi <= 85) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 78 && genetics <= 100)
 ) {
   result = "Normal";

   // rule 26
 } else if (
   (bmi >= 83 && bmi <= 100) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 0 && genetics <= 30)
 ) {
   result = "Normal";

   // rule 27
 } else if (
   (bmi >= 83 && bmi <= 100) &&
   (obesity >= 0 && obesity <= 40) &&
   (genetics >= 29 && genetics <= 80)
 ) {
   result = "Normal";

  } else {
    result = "Invalid ";
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
