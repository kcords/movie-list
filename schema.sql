DROP DATABASE IF EXISTS movie_list;

CREATE DATABASE movie_list;

USE movie_list;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(40),
  overview VARCHAR(500),
  poster_path VARCHAR(150),
  release_date VARCHAR(20),
  vote_average FLOAT(2,1),
  watched BOOLEAN
);

-- INSERT INTO movies (title, overview, poster_path, release_date, vote_average) VALUES
-- ('Inception','It\'s a movie','url','1999-03-30',9.9);