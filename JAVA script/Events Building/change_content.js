let button=document.getElementById("btn")
button.addEventListener("click", function() {
document.querySelector(".box").style.backgroundColor = "blue";
document.querySelector(".box").innerHTML = "Content changed!";
});
button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})