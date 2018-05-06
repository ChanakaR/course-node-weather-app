console.log("Starting App");

setTimeout(()=> {
    console.log("Inside the callback function");
}, 2000);

setTimeout(()=> {
    console.log("Inside the 0 callback function");
},0);

console.log("Finishing execution");