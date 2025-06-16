let btn1=document.querySelector(".move_btn_login");
let page1=document.querySelector(".main_side_signin");
let btn2=document.querySelector(".move_btn_signup");
let page2=document.querySelector(".main_side_signup");

btn1.addEventListener("click",()=>{
    page1.classList.add("move");
    page2.classList.remove("move2");
    page1.style.zIndex = "-1";
    page2.style.zIndex = "1";
});

btn2.addEventListener("click",()=>{
    page2.classList.add("move2");
    page1.classList.remove("move");
    setTimeout(()=>{
        page1.classList.remove("start");
    },1000);
    page2.style.zIndex = "-1";
    page1.style.zIndex = "1";
});
