const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const diagnosisRoutes = require('./diagnosisRoutes');
const PORT = process.env.PORT || 5000


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// Routes
// app.use('/api', diagnosisRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
