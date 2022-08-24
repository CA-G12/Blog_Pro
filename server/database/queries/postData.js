const connection = require('../config/connection');

const newPost = () => connection.query(`INSERT INTO posts (category, content, image) values
    ('sport', 'Stay off the tracks! The Cleburne Railroaders and Gary SouthShore RailCats are barreling towards the final playoff spot in the East 🚂
    Separated by just a few games, watch these two teams battle it out on the free Facebook Game of the Week!
    Join Carter Woodiel and Michael Lang, sit back and enjoy the action!', 'https://i.pinimg.com/564x/dd/64/19/dd641949057f0fc55745a1b982f26fbc.jpg')`);

module.exports = newPost;
