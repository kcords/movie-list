var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'movie_list'
});

connection.connect( err => {
  err ? err : console.log('Connected to MySQL database...')
});

const getAll = (callback) => {
  const query = 'SELECT * FROM movies';
  connection.query(query, function (error, results, fields) {
    error ? callback(error) : callback(null, results);
  });
}

const create = (data, callback) => {
  const { title, overview, poster_path, release_date, vote_average } = data;
  const query = 'INSERT INTO movies (title, overview, poster_path, release_date, vote_average) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [title, overview, poster_path, release_date, vote_average], (error, results) => {
    error ? callback(error) : callback(null, results);
  })
}

// connection.end();

module.exports = {
  getAll: getAll,
  create: create
}


//! ------- Old attempt at MongoDB ---------

// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');

// const uri = "mongodb+srv://dev-user:dev2020@devconnector.1ofee.mongodb.net/DevConnector?retryWrites=true&w=majority";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//     console.log('MongoDB connected via mongoose...')

//   } catch (err) {
//     console.error(err.message);
//     //exit process with failure
//     process.exit(1);
//   }
// }

// //! OLD -- TO BE REMOVED
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const mongo = (callback) => {
//   client.connect()
//     .then( result => {
//       console.log('Connected to MongoDB!');
//       callback(result);
//     })
//     .catch( err => {
//       console.error(err)
//     })
// }
// //!---------------------!

// module.exports = {
//   connectDB: connectDB,
//   mongo: mongo
// }


//! --- garbage ----
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongodb+srv://dev-user:<password>@devconnector.1ofee.mongodb.net/<dbname>?retryWrites=true&w=majority