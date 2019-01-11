let socket = io();
socket.on('mouseMoved', (otherMousePos) => {
    newDrawing(otherMousePos);
})

function newDrawing({x, y}) {
    noStroke();
    fill(255);
    ellipse(x, y, 35, 35);
}

function setup() {
    createCanvas(1200, 800);
    background(0);
    console.log('setup')
}

function mouseDragged() {
    let mousePos = {
        x: mouseX,
        y: mouseY
    }
    newDrawing(mousePos)

    socket.emit('mouseMoved', mousePos)
}