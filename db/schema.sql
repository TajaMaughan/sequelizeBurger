CREATE DATABASE burger2;
USE burger2;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);