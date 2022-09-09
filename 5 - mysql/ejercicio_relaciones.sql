CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR (255) NOT NULL,
amonestaciones INT NOT NULL);

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
rfc VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL, 
sesiones VARCHAR(255) NOT NULL
);

CREATE TABLE equipo(
equipo_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

CREATE TABLE direccion (
direccion_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

CREATE TABLE cohorte(
cohorte12_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR (255) NOT NULL);

ALTER TABLE direccion
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id);

ALTER TABLE direccion
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)
REFERENCES alumno (alumno_id);

INSERT INTO cohorte(numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES (12, '5:30' 'Practicas', 'Tequesquitengo'),
('100', '6:30pm',6,'Laboratorio','Facultad de Ciencias, MTY'),
('50', '12:00pm',4,'Clase Teorica','Queretaro'),
('120', '11:am',7,'Conferencia','Valle de Bravo'),
('400', '3:00pm',4,'Auditorio','Acapulco'),
('14', '7:15pm',7,'Sesion Online','En linea');




