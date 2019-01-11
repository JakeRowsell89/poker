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

  state.players.push(playerFactory(socket.id))
  io.emit('message', 'Player has joined')
  io.emit('state', state)
  if (!state.gameInProgress) {
    // startGame and set state.gameInProgress = true
  }
  socket.on('*', (event) => {
    console.log(event)
    // socket.broadcast.emit('mouseMoved', mousePos);
  })
});


const state = {
  gameInProgress: false,
  players: [],
  deck: [],
  discard: [],
  communal: [],
  pot: 0
}

function playerFactory(id) {
  return {
    isDealer: false,
    seatNumber: null,
    hand: [],
    stack: 0,
    id: id,
  }
}






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