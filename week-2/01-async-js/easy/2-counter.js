let time=0;

function callet(){
   {
    console.log("time:",time++);
    setTimeout(callet, 1000);
}
}

callet();
