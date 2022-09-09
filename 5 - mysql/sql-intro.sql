-- SHOW DATABASES;
/*
Bloque de comentarios




*/
CREATE DATABASE tienda;

USE tienda;

DROP DATABASE tienda;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL 
);

DROP TABLE clientes;

DROP TABLE compra;

TRUNCATE TABLE compra;

TRUNCATE TABLE clientes;


INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

;

SELECT * FROM clientes;

SELECT * FROM compra;

-- DELETE FROM clientes
-- WHERE nombre = 'Pedro';

-- DELETE FROM clientes
-- WHERE 
