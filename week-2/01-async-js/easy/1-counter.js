
let time=0;

function counter()
{
    time++;
    console.log("time:",time);
}

//setinterval is used to repeate a specific function after a perticulat time
const caller =setInterval(counter,1000);

console.log(caller)

//stoping after 10 sec
function ender(){
    clearInterval(caller);
}
setTimeout(ender,10000)
