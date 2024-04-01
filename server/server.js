const io =require("socket.io")(3001,{
    cors:{
        // origin:["https://3731-2409-40e3-4016-c61a-259b-bcab-8176-72af.ngrok-free.app","*"],
        origin:"*",
        methods:["GET","POST"],
    },
})
io.on("connection",(socket)=>{
    console.log("You are connected.");
    socket.on("message",(message)=>{
        io.emit("message",message)
        console.log("Your current message",message);
    })

    socket.on('typing', () => {
        socket.broadcast.emit('userTyping');
      });
    
      socket.on('stopTyping', () => {
        socket.broadcast.emit('userStopTyping');
      });

   
})
// io.on("connection",(socket)=>{
//     console.log("You are connected============");
//     socket.on("admin_msg",(msg)=>{
//         io.emit("admin_msg",msg)
//         console.log("Admin message --------------",msg)
//     })
// })
console.log("Hello server");

