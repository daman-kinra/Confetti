
const started  = () =>{
    setTimeout(function(){
        console.log("Started")
        confetti.start();
    }, 1500);
};
const stopped  = () =>{
    setTimeout(function(){
        console.log("Stopped")
        confetti.stop();
    }, 7000);
};
started();
stopped();