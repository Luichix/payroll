USE database_payroll;

SELECT * FROM TAX;

DESCRIBE USER;

/* ALTER TABLE USER ADD AddedDate DATE NOT NULL;
ALTER TABLE USER ADD AlterDate DATE NOT NULL;
ALTER TABLE USER ADD LowDate DATE NOT NULL;

SELECT * FROM PERSONAL;
ALTER TABLE PERSONAL RENAME COLUMN CancelDate TO LowDate;
ALTER TABLE PERSONAL CHANGE CancelDate LowDate DATE NOT NULL;

ALTER TABLE USER MODIFY LowDate DATE NULL;
ALTER TABLE USER MODIFY AlterDate DATE NULL;

ALTER TABLE USER MODIFY ID_USER INT NOT NULL AUTO_INCREMENT; */

/* SELECT * FROM PERSONAL;
ALTER TABLE PERSONAL RENAME COLUMN CancelDate TO LowDate;
ALTER TABLE PERSONAL CHANGE CancelDate LowDate DATE NOT NULL; */


/* ALTER TABLE USER ADD Status VARCHAR(15);

ALTER TABLE `database_payroll`.`USER` 
CHANGE COLUMN `Status` `Status` VARCHAR(15) NOT NULL ; */
