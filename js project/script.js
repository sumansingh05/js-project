//for first box
let x = document.querySelector(".first");
x.addEventListener("mouseenter",function(){
    x.innerHTML = Math.floor(Math.random()*100);
    x.style.backgroundColor = "pink";
});
x.addEventListener("mouseleave",function(){
    x.innerHTML = 1;
    x.style.backgroundColor = "white";
});



//for second box
let y = document.querySelector(".second");
let clr = "red";
y.addEventListener("mouseenter",function(){
    if(clr == "red"){
        y.style.backgroundColor = "red";
        clr = "green";
    }else if(clr == "green"){
        y.style.backgroundColor = "green";
        clr = "blue";
    }else{
        y.style.backgroundColor = "blue";
        clr = "red";
    }
});
y.addEventListener("mouseleave",function(){   
    y.style.backgroundColor = "white";
});



//for third box
let z = document.querySelector(".third");
z.addEventListener("mouseenter",function(){ 
    let a = Math.floor(Math.random()*256); 
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256); 
    z.style.backgroundColor = `rgb(${a},${b},${c})`;
});
z.addEventListener("mouseleave",function(){    
    z.style.backgroundColor = "white";
});


//for fourth box
let w = document.querySelector(".fourth");
w.addEventListener("click",function(){ 
    let a = Math.floor(Math.random()*256); 
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256); 
    x.style.backgroundColor = `rgb(${a},${b},${c})`;
    y.style.backgroundColor = `rgb(${c},${a},${b})`;
    z.style.backgroundColor = `rgb(${b},${c},${a})`;
});
w.addEventListener("mouseleave",function(){    
    x.style.backgroundColor = "white";
    y.style.backgroundColor = "white";
    z.style.backgroundColor = "white";
});

