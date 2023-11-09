const express = require('express');
const cors = require('cors')
const app = express();



app.get('/', (req, res) => {
  res.send('Hello peeps!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
