USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC; 

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias

SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Basicamente DISCTINCT filtra los datos repetidos

-- WHERE cláusula
-- <> <= >= != =
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE continent != 'North America' ORDER BY Continent ASC;

-- Between
-- se utiliza junto con WHERE
SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND / != -- lógicos

SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM country WHERE Continent != 'Asia' OR Continent != 'Europe' OR Continent != 'North America';

-- operador IN
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

-- Filtrar valores nulos NULL
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;

-- LIKE sirve para buscar un patron en especifico
-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un caracter o un espacio
SELECT Name FROM country WHERE Name LIKE '%as%';
SELECT * FROM country WHERE Continent LIKE 'asia';
SELECT * FROM country WHERE Name LIKE '%e__a';