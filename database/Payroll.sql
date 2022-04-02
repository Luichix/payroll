CREATE DATABASE database_payroll;

USE database_payroll;

CREATE TABLE `database_payroll`. `PAYROLL`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR (45) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `fullname` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

DESCRIBE PAYROLL;
