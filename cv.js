const clock = document.getElementById("date");
const date=document.getElementById("day");

setInterval(function(){
let date= new Date();
clock.innerHTML=date.toLocaleTimeString();

},1000);

setInterval(function(){
    let day= new Date()
    date.innerHTML=day.toLocaleDateString()
})
function f1(obj){
obj.style. borderBottom=" 3px dotted #cbe9eb";
obj.innerHTML= "<h3>Education is the key to unlocking the world, a passport to freedom.</h3>";
}

function f2(obj){
    obj.style.borderBottom="";
    obj.innerHTML="";
}