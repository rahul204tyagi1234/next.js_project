const io =require("socket.io")(3001,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
})
io.on("connection",(socket)=>{
    console.log("You are connected.");
    socket.on("message",(message)=>{
        io.emit("message",message)
        console.log("Your current message",message);
    })

    // socket.on("admin_msg",(msg)=>{
    //     io.emit("admin_msg",msg)
    //     console.log("Admin message --------------",msg)
    // })
})
// io.on("connection",(socket)=>{
//     console.log("You are connected============");
//     socket.on("admin_msg",(msg)=>{
//         io.emit("admin_msg",msg)
//         console.log("Admin message --------------",msg)
//     })
// })
console.log("Hello server");

