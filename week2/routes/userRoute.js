'use strict';
const { Router } = require('express');
// userRoute
const express = require('express');
const {user_list_get, user_get, user_create_post} = require('../controllers/userController');
const router = express.Router();

router.route('/').get(user_list_get).post(user_create_post);

router.get('/:id', user_get);

router.put('/c', (req, res) => {
  res.send('With this endpoint you can edit users')
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.')
});

module.exports = router;

