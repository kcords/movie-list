const express = require('express');
const path = require('path');
const db = require('../database/index.js');
// const connectDB = require('../database/index.js').connectDB;

const app = express();
const PORT = 3000 || process.env.PORT;
const PUBLIC_DIR = path.resolve(__dirname, '../public')


app.use(express.static(PUBLIC_DIR));

app.use(express.json());

// connectDB();

app.use('/', (req, res, next) => {
  console.log(`${req.method} http request received for ${req.path}!`);
  next();
})

app.get('/api/movies', (req, res) => {
  // console.log(req);
  db.getAll( (error, data) => {
    error
      ? res.send('An error occurred retrieving your data.').status(500)
      : res.send(data).status(200)
    error && console.error(error);
  })
})

app.post('/api/movies', (req, res) => {
  console.log(req.body)
  db.create( req.body, (error, data) => {
    error
      ? res.send(`An error occurred adding ${req.body.title}`).status(500)
      : res.send(`${req.body.title} was added successfully.`).status(200)
    error && console.error(error);
  })
})

app.patch('/api/movies', (req, res) => {
  db.update( req.body, (error, data) => {
    error
      ? res.send('Update not successful.').status(500)
      : res.send(`${req.body.title} was updated successfully.`).status(200)
  })
})

// db.mongo( client => {
//   console.log(client);
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  })
// })