const socket = io()

const btnOn = document.querySelector(".btn-primary");
const btnOff = document.querySelector(".btn-danger");

const hanlerLights = (e)=>{
    const ledState = e.target.id;
   socket.emit("led",ledState)
};
btnOn.addEventListener("click", hanlerLights);
btnOff.addEventListener("click", hanlerLights);