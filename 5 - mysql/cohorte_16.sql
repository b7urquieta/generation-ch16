CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;

INSERT INTO cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ('Victor', 'Fernandez',7,'Tulancingo, Hidalgo','Java'),
('Jonathan', 'Vazquez',6,'CDMX','Javascript'),
('Raul', 'Sanchez',4,'Guadalajara','CSS'),
('Brandon', 'Urquieta',7,'Estado de México','Full stack developer'),
('Maria', 'Vargas',4,'Estado de Mexico','Mentoria'),
('Magali', 'Quiroz',7,'CDMX','Entrevistas');

SELECT * FROM cohorte_16;

DELETE FROM cohorte_16
WHERE alumno_id = 3;

SELECT * FROM cohorte_16;

UPDATE cohorte_16
SET nombre = 'Marina',
apellido = 'Pardo'
WHERE alumno_id = 5;

UPDATE cohorte_16
SET nombre = REPLACE (nombre, 'Magali', 'Marina');

SELECT nombre, apellido FROM cohorte_16 WHERE nombre = 'Victor';

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido DESC;
/*ASC - DESC*/


