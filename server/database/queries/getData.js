const connection = require('../config/connection')

const getData =()=>{
  return connection.query('select * from posts');
}



module.exports=getData
