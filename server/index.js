const express = require('express');
const path = require('path');
// const db = require('../database.index.js')

const app = express();
const PORT = 3000 || process.env.PORT;
const PUBLIC_DIR = path.resolve(__dirname, '../public')

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})