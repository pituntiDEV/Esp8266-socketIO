const express= require("express");
const path= require("path");
const app = express();
const server= require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "./public")))

io.on("connection", (socket)=>{
    socket.on("message",(data)=>{
        console.log(data)
    })
    socket.on("led",(state)=>{
        const estado = state=="on" ? 0 : 1;
        console.log("Led")
        io.emit("ledState",estado);
        
    })
})

server.listen(1992);