
-- Inserting data into the categories table for a cheese store
INSERT INTO categories (origin, pungency_level) VALUES
('Blue Cheese', 'Strong'),
('Cheddar', 'Medium'),
('Brie', 'Mild'),
('Gouda', 'Medium'),
('Swiss', 'Mild'),
('Camembert', 'Mild'),
('Feta', 'Tangy'),
('Gorgonzola', 'Strong'),
('Havarti', 'Mild'),
('Parmesan', 'Strong');

-- Inserting data into the products table for a cheese store
INSERT INTO products (product_name, price, stock_quantity, category_id) VALUES
('Blue Cheese Wheel', 19.99, 50, 1),
('Aged Cheddar Block', 12.49, 80, 2),
('Brie Round', 8.99, 60, 3),
('Smoked Gouda Wedge', 14.99, 40, 4),
('Swiss Cheese Slices', 9.99, 70, 5),
('Camembert Wheel', 11.49, 55, 6),
('Feta Crumbles', 7.99, 90, 7),
('Gorgonzola Crusted Cheese Ball', 16.99, 30, 8),
('Creamy Havarti Logs', 10.49, 65, 9),
('Grated Parmesan Shaker', 6.49, 100, 10);

-- (Insert the remaining user, user_roles, and user_purchases data as needed)







