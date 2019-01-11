const path = require('path');
const express = require('express');
const socket = require('socket.io');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use('/modules', express.static(path.join(__dirname, '../node_modules')))

const server = app.listen(3000, () => {
  console.log("Server running");
});

const io = socket(server);


io.sockets.on('connection', (socket) => {
  console.log('new clent connected! Id: ' + socket.id);
  socket.on('mouseMoved', (mousePos) => {
    socket.broadcast.emit('mouseMoved', mousePos);
  })
});













// const players = [
//   {
//     connected: async () => {
//       // listen for connected ws events
//     }
//   },
// ]

// async function startGame(){

//   // initialise

//   await Promise.all(players.some(({connected}) => connected())

//   return assignDealer()
// }

// async function assignDealer(){
//   // players

//   await blinds()
// }

// async function blinds(){
// }