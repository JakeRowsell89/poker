const socket = io()

socket.on('state', (state) => {
  console.log(state)
})

socket.on('message', m => console.log(m))
