'use strick';

const io = require('socket.io')(3000);
const PORT = 3000 ;
const school = io.of('/school');


school.on('connection', (socket)=>{


  console.log(`New Connection:  ${socket.id}`);

  socket.on('students' , ()=> {
    socket.join('students', () => console.log('New student Joined!'));
    socket.on('submission' , data => {
      socket.broadcast.emit('grading' , data);
      // console.log('hi');
      // works
    });
    
  });
  
  
  socket.on('instructors' , ()=> {
    socket.join('instructors', () => console.log('New Instructor Joined!'));
  });
  

  socket.on('graded' , data => console.log(data));

  // socket.to('students').on('submission' , payload => {
  //   console.log(`${payload} assignment Graded!`);
  // });
});




console.log(`Alright We Up at ${PORT}`);