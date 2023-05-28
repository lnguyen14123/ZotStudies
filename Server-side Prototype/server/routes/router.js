const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require(`../controller/controller`);

// 
route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user);
route.get('/update-user', services.update_user);

route.get('/add-class', services.add_class);


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.post('/api/classes', controller.create_class);
// route.get('/api/users', controller.find);
// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);



module.exports = route; 