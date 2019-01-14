const io = require('socket.io')();
const { BASE_STATE } = require('./constants')

const state = {...BASE_STATE}


io.on('connection', (socket) => {
  console.log('new client connected! Id: ' + socket.id);

  state.players.push(playerFactory(socket.id))
  io.emit('message', 'Player has joined')
  io.emit('state', state)
  if (!state.gameInProgress) {
    // startGame and set state.gameInProgress = true
    startGame()
    state.gameInProgress = true
  }

  socket.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });


  socket.on('disconnect', (reason) => {
    io.emit('message', 'Player disconnected ' + socket.id)
    state.players = state.players.filter(p => p.id !== socket.id)
  })
});


const socketPort = 8000;
io.listen(socketPort)
console.log('listening on port', socketPort)




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

async function startGame(){

  // - A computer "player gets added"
  // - clears table of cards/money
  // - Cards get shuffled
  // - players with no money removed from game
  console.log('starting game')
  await new Promise(resolve => setTimeout(resolve, 1000))
  return assignDealer()
}

async function assignDealer(){
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

async function showdown(){
  return startGame()
}