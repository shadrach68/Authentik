
const close = document.getElementById("open");
const open = document.getElementById("close")
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")

open.addEventListener("click",()=>{
    close.classList.toggle("openn")
    line1.classList.toggle("line1")
    line2.classList.toggle("line2")
    // console.log(close.classList);
})