
-- Create the items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price INT
);

-- Insert items into the items table
INSERT INTO items (name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- Create the customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);

-- Insert customers into the customers table
INSERT INTO customers (firstname, lastname) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

-- Fetch all the items
SELECT * FROM items;

-- Fetch all the items with a price above 80
SELECT * FROM items WHERE price > 80;

-- Fetch all the items with a price below 300 (including 300)
SELECT * FROM items WHERE price <= 300;

-- Fetch all customers whose last name is ‘Smith’
SELECT * FROM customers WHERE lastname = 'Smith';

-- Fetch all customers whose last name is ‘Jones’
SELECT * FROM customers WHERE lastname = 'Jones';

-- Fetch all customers whose first name is not ‘Scott’
SELECT * FROM customers WHERE firstname <> 'Scott';
