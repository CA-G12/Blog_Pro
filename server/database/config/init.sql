BEGIN;

DROP TABLE IF EXISTS posts, comments CASCADE;

CREATE TABLE posts(
    id serial primary key,
    category VARCHAR(100) NOT NULL,
    content TEXT ,
    image VARCHAR(255)
);

CREATE TABLE comments(
    id serial primary key,
    comment VARCHAR(255) NOT NULL,
    posts_id INTEGER 
);

INSERT INTO posts (category, content, image) values
('sport', 'Stay off the tracks! The Cleburne Railroaders and Gary SouthShore RailCats are barreling towards the final playoff spot in the East 🚂
Separated by just a few games, watch these two teams battle it out on the free Facebook Game of the Week!
Join Carter Woodiel and Michael Lang, sit back and enjoy the action!', 'https://i.pinimg.com/564x/dd/64/19/dd641949057f0fc55745a1b982f26fbc.jpg'),
('Beauty', 'Showing treatments rooms 1 ,2 ,3 and 4. Often clients are shocked when realising just how many treatment rooms are available and how much we offer.  Come and see for yourself. We offer a large range of treatments. From precision waxing to laser to bespoke facials. Highly trained lash technicians too. ❤️',
'https://i.pinimg.com/564x/ad/8b/2e/ad8b2e8fe1d9db6f882d8752bc76e858.jpg'),
('Food','The countys newly expanded Restaurant Month runs throughout August. Plenty of prix-fixe menus to explore. Here are some highlights! 🍴','https://i.pinimg.com/736x/a2/45/24/a24524c60d6ea16adf8cf6aad6b45e77.jpg'),
('Medical','The leading source for trustworthy and timely health and medical news and information. Providing credible health information, supportive community','https://i.pinimg.com/564x/1b/67/1b/1b671b56692d2f729c41189e12045bfd.jpg');



INSERT INTO comments (comment, posts_id) values
('Conference Semifinals might not have gone the way the Dallas Mustangs wanted', '1'),
('we stock new and trending brands from all over the world', '2'),
('substance consisting essentially of protein', '3'),
('trust with your patients so they can get the care they need', '1');

COMMIT;