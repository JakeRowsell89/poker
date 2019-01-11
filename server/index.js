const path = require('path');
const express = require('express');
const socket = require('socket.io');

const { BASE_STATE } = require('./constants')

const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use('/modules', express.static(path.join(__dirname, '../node_modules')))

const server = app.listen(3000, () => {
  console.log("Server running");
});


const state = { ...BASE_STATE }
const io = socket(server);

io.sockets.on('connection', (socket) => {
  console.log('new client connected! Id: ' + socket.id);

  state.players.push(playerFactory(socket.id))
  io.emit('message', 'Player has joined')
  io.emit('state', state)
  if (!state.gameInProgress) {
    // startGame and set state.gameInProgress = true
    startGame()
    state.gameInProgress = true
  }

  socket.on('disconnect', (reason) => {
    io.emit('message', 'Player disconnected ' + socket.id)
    state.players = state.players.filter(p => p.id !== socket.id)
  })
});



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

async function startGame() {

  // - A computer "player gets added"
  // - clears table of cards/money
  // - Cards get shuffled
  // - players with no money removed from game  
  console.log('starting game')
  await new Promise(resolve => setTimeout(resolve, 1000))
  return assignDealer()
}

async function assignDealer() {
  // players

  return takeBlinds()
}

async function takeBlinds() {

  return deal()
}

async function deal() {
  return flop()
}

async function flop() {
  return turn()
}

async function turn() {
  return river()
}

async function river() {
  return showdown()
}

async function showdown() {
  // phase actions
  // - highest hand combinations are calculated
  // - all hands are revealed
  // - Pot is given to winner
  // end conditions
  // - pot has been given to winner(s)

  
  return startGame()
}