const io = require("socket.io")(8080, {
    cors: {
      origin: "http://localhost:3000", // Replace with your client's origin
      methods: ["GET", "POST"],
    },
});
console.log("🚀 Server started on port 8080");

io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})