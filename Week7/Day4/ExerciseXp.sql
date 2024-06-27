-- Exercise 1
SELECT * FROM language;

SELECT film.title, film.description, language.name 
FROM film 
JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name 
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

CREATE TABLE new_film (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Seven'),
('Liar liar'),
('Sing');

CREATE TABLE customer_review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT,
    language_id INT,
    title VARCHAR(255),
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text) 
VALUES 
(1, 1, 'Great Movie', 9, 'Really enjoyed it!'),
(2, 2, 'Not bad', 7, 'It was okay.');

DELETE FROM new_film WHERE id = 1;

SELECT * FROM customer_review;

-- Exercise2

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title IN ('Chamber Italian', 'Grosse Wonderful');

SHOW CREATE TABLE customer;

INSERT INTO customer (store_id, first_name, last_name, email, address_id, active) 
VALUES (1, 'John', 'Doe', 'john.doe@example.com', 1, 1);

DROP TABLE IF EXISTS customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- 1st film: About a sumo wrestler and actor Penelope Monroe
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description LIKE '%sumo%' AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

-- 2nd film: Short documentary (less than 1 hour), rated "R"
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

-- 3rd film: Rented by Matthew Mahan, over $4.00, returned between specific dates
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND r.rental_date BETWEEN '2005-07-28' AND '2005-08-01' AND r.return_date IS NOT NULL AND r.amount > 4.00;

-- 4th film: Watched by Matthew Mahan, contains "boat" in title/description, expensive DVD
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%') AND f.replacement_cost > 10.00;
