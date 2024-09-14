// We are defining our function
function toggleMenu() {
    const menu = document.querySelector(".menu-links");   // this is inbuit system in JS we are going to target on our web page and we are going to use the element here we are targeting menu-link for the functioning
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

let button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    button.classList.add("active");
    setTimeout(()=>{
        button.classList.remove("active");  // remove active class after 6s
        document.querySelector(".content i").classList.replace("bx-cloud-upload", "bx-check-circle");
        document.querySelector(".button-text").innerText = "Submitted";  // change the text after the animation
    
    },4000) // 1s = 1000ms
})