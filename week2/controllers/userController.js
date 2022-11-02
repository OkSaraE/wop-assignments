'use strict';
const {users, getUser} = require('../models/userModel');
const { post } = require('../routes/userRoute');

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res)=>{
  const user = getUser(req.params.id);
  console.log('Käyttäjä', user);
  res.json(user);
}

const user_post = (req, res)=>{
  console.log(req.body);
  res.send('Add user route');
}

module.exports = {
  user_list_get,
  user_get,
  user_post,
};