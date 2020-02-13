'use strict';

const io = require('socket.io-client');
const school =io.connect('http://localhost:3000/school');
const faker = require('faker');

school.emit('students' , 'New Student connected !!');


setInterval(() => {  
  
  school.emit('submission' , faker.name.title());

}, 1000);