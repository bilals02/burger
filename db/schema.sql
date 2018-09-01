--Create the burgers db database
CREATE DATABASE burgers_db;
USE burgers_db;

--Create a burgers table with the required fields
CREATE TABLE burgers (
    id INT(10) NOT NULL AUTO_INCREMENT,
    burgerName CHAR(40) NOT NULL,
    devoured BOOLEAN,
    TS TIMESTAMP,
    DT DATETIME,
    PRIMARY KEY (id)
);