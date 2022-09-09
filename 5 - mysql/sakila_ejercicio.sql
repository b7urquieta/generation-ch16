USE sakila;

-- El titulo de las peliculas con el idioma que tienen
SELECT title, name FROM film, language; 
-- El monto total que pago un cliente por rentas de peliculas el dia 2005-06-15
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;
-- Cuantas peliculas estan hechas en un mismo idioma? 1000 peliculas
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;
-- Las direcciones de cada pais:
SELECT address, district FROM address ORDER BY district ASC;

