let btn1 = document.querySelector(".move_btn_login");
let page1 = document.querySelector(".main_side_signin");
let btn2 = document.querySelector(".move_btn_signup");
let page2 = document.querySelector(".main_side_signup");
let page3=document.querySelector(".login");
let page4=document.querySelector(".signUp");

btn1.addEventListener("click", () => {
  page1.classList.add("move");
  page2.classList.remove("move2");

  page1.classList.remove("active");
  page1.classList.add("start");

  page2.classList.remove("start");
  page2.classList.add("active");

  page4.classList.add("moveLeftPage");
  page3.classList.remove("moveRightPage");
});

btn2.addEventListener("click", () => {
  page2.classList.add("move2");
  page1.classList.remove("move");

  page2.classList.remove("active");
  page2.classList.add("start");

  page1.classList.remove("start");
  page1.classList.add("active");

  page4.classList.remove("moveLeftPage");
  page3.classList.add("moveRightPage");
});
