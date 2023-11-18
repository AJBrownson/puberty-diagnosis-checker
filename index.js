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

  // If...else fuzzy rules for computing the results
  let result;

  // rule 1
  if ( 
    (bmi === 'underweight') &&
    (obesity === 'not') &&
    (genetics === 'late')
  ) {
    result = "Puberty is likely to be delayed";
    recommendation = "Regularly monitor the patient's growth and development, and consider additional hormonal evaluations if necessary. Collaboration with the endocrinologist for specialized care is very important.";

    // rule 2
  } else if (
    (bmi === 'underweight') &&
    (obesity === 'not') &&
    (genetics === 'average')
  ) {
    result = "Puberty is likely to be delayed";
    recommendation = "Regularly monitor the patient's growth and development, and consider additional hormonal evaluations if necessary. Collaboration with the endocrinologist for specialized care is very important.";

    // rule 3
  } else if (
    (bmi === 'underweight') &&
    (obesity === 'not') &&
    (genetics === 'early')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 4
  } else if (
    (bmi === 'normal') &&
    (obesity === 'not') &&
    (genetics === 'early')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 5
  } else if (
    (bmi === 'normal') &&
    (obesity === 'not') &&
    (genetics === 'average')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 6
  } else if (
    (bmi === 'normal') &&
    (obesity === 'not') &&
    (genetics === 'late')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 7
  } else if (
    (bmi === 'overweight') &&
    (obesity === 'not') &&
    (genetics === 'late')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 8
  } else if (
    (bmi === 'overweight') &&
    (obesity === 'not') &&
    (genetics === 'average')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 9
  } else if (
    (bmi === 'overweight') &&
    (obesity === 'not') &&
    (genetics === 'early')
  ) {
    result = "Puberty is likely to be normal";
    recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 10
  } else if ( 
    (bmi === 'underweight') &&
    (obesity === 'slightly') &&
    (genetics === 'late')
  ) {
    result = "Puberty is likely to be delayed";
    recommendation = "Regularly monitor the patient's growth and development, and consider additional hormonal evaluations if necessary. Collaboration with the endocrinologist for specialized care is very important.";

   // rule 11
 } else if (
  (bmi === 'underweight') &&
  (obesity === 'slightly') &&
   (genetics === 'average')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 12
 } else if (
  (bmi === 'underweight') &&
  (obesity === 'slightly') &&
   (genetics === 'early')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 13
 } else if (
   (bmi === 'normal') &&
   (obesity === 'slightly') &&
   (genetics === 'late')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 14
 } else if (
   (bmi === 'normal') &&
   (obesity === 'slightly') &&
   (genetics === 'average')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 15
 } else if (
   (bmi === 'normal') &&
   (obesity === 'slightly') &&
   (genetics === 'early')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 16
 } else if (
   (bmi === 'overweight') &&
   (obesity === 'slightly') &&
   (genetics === 'late')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 17
 } else if (
   (bmi === 'overweight') &&
   (obesity === 'slightly') &&
   (genetics === 'average')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 18
 } else if (
   (bmi === 'overweight') &&
   (obesity === 'slightly') &&
   (genetics === 'early')
 ) {
   result = "Puberty is likely to be precocious";
   recommendation = "Perform additional evaluations to identify the underlying cause, collaborate with an endocrinologist for specialized care, and closely monitor the patient's developmental progress.";

   // rule 19
 } else if (
   (bmi === 'underweight') &&
   (obesity === 'very') &&
   (genetics === 'late')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 20
 } else if (
   (bmi === 'underweight') &&
   (obesity === 'very') &&
   (genetics === 'average')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 21
 } else if (
   (bmi === 'underweight') &&
   (obesity === 'very') &&
   (genetics === 'early')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 22
 } else if (
   (bmi === 'underweight') &&
   (obesity === 'very') &&
   (genetics === 'late')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 23
 } else if (
   (bmi === 'underweight') &&
   (obesity === 'very') &&
   (genetics === 'average')
 ) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

   // rule 24
 } else if (
   (bmi === 'underweight') &&
   (obesity === 'very') &&
   (genetics === 'early')
 ) {
  result = "Puberty is likely to be precocious";
  recommendation = "Perform additional evaluations to identify the underlying cause, collaborate with an endocrinologist for specialized care, and closely monitor the patient's developmental progress.";

    // rule 25
 } else if (
  (bmi === 'overweight') &&
  (obesity === 'very') &&
  (genetics === 'late')
) {
  result = "Puberty is likely to be normal";
  recommendation = "Continue regular check-ups to monitor normal development. Provide education on physical and emotional changes during puberty and address any concerns or questions from the patient.";

    // rule 26
 } else if (
  (bmi === 'overweight') &&
  (obesity === 'very') &&
  (genetics === 'average')
) {
  result = "Puberty is likely to be precocious";
   recommendation = "Perform additional evaluations to identify the underlying cause, collaborate with an endocrinologist for specialized care, and closely monitor the patient's developmental progress.";

   // rule 27
 } else if (
   (bmi === 'overweight') &&
   (obesity === 'very') &&
   (genetics === 'early')
 ) {
   result = "Puberty is likely to be precocious (early)";
   recommendation = "Conduct further evaluations to identify the cause and collaborate with an endocrinologist for specialized care. Make sure the patient's development is being monitored closely.";

  } else {
    result = "Invalid input";
  }
  console.log('Sending result:', result);
  res.json({ result, recommendation });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
