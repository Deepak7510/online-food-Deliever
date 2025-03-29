const navItem = document.querySelector("#navbar ul")
const bar = document.querySelector(".bar")
const Xbar = document.querySelector(".Xbar")
const menu = document.querySelector(".menu")
let i = 0;
console.log("hello")
console.log(menu)

menu.addEventListener("click",function(){
    if(i==0){
        bar.style.display = "none";
        Xbar.style.display = "block";
        navItem.style.right = "0%"
        i = 1;
    }else if(i==1){
        bar.style.display = "block";
        Xbar.style.display = "none";
        navItem.style.right = "-100%"
        i = 0;
    }
})
const item = document.querySelector(".item");
navItem.addEventListener("click", function (e) {
    if (e.target.classList.contains("item")) {
        bar.style.display = "block";
        Xbar.style.display = "none";
        navItem.style.right = "-100%"
        i=0;
    }
})