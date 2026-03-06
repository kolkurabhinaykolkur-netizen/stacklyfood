/* HERO SLIDER */

let slides=document.querySelectorAll(".slide");

let index=0;

function changeSlide(){

slides[index].classList.remove("active");

index++;

if(index>=slides.length){
index=0;
}

slides[index].classList.add("active");

}

setInterval(changeSlide,3000);


/* MOBILE MENU */

const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const closeMenu=document.querySelector(".close-menu");

hamburger.addEventListener("click",()=>{

navMenu.classList.add("active");

});

closeMenu.addEventListener("click",()=>{

navMenu.classList.remove("active");

});


/* MOBILE DROPDOWN */

const dropdownLink=document.querySelector(".dropdown > a");

dropdownLink.addEventListener("click",(e)=>{

if(window.innerWidth < 900){

e.preventDefault();

dropdownLink.nextElementSibling.classList.toggle("show");

}

});



const aboutElements = document.querySelectorAll(".about-header, .about-img");

window.addEventListener("scroll", () => {

aboutElements.forEach(el => {

let position = el.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 100){

el.classList.add("show");

}

});

});



const dots = document.querySelectorAll(".dot");
const c = document.querySelectorAll(".quote-slide");
const images = document.querySelectorAll(".quote-img");

dots.forEach(dot => {

dot.addEventListener("click", () => {

let index = dot.getAttribute("data-slide");

/* remove active */

c.forEach(s => s.classList.remove("active"));
images.forEach(img => img.classList.remove("active"));
dots.forEach(d => d.classList.remove("active"));

/* add active */

c[index].classList.add("active");
images[index].classList.add("active");
dot.classList.add("active");

});

});


const specialSection = document.querySelectorAll(
".stackly-special-img, .stackly-special-content"
);

window.addEventListener("scroll",()=>{

specialSection.forEach(el=>{

let position = el.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){

el.classList.add("stackly-show");

}

});

});



/* MENU SCROLL ANIMATION */

const menuElements = document.querySelectorAll(
".menu-title, .menu-item, .menu-btn"
);

function revealMenu(){

menuElements.forEach(el => {

let position = el.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

if(position < windowHeight - 120){

el.classList.add("show-menu");

}

});

}

window.addEventListener("scroll", revealMenu);




/* TIPS SCROLL ANIMATION */

const tipsElements = document.querySelectorAll(
".tips-img, .tips-content"
);

window.addEventListener("scroll",()=>{

tipsElements.forEach(el=>{

let position = el.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

if(position < windowHeight - 100){

el.classList.add("tips-show");

}

});

});












/* MENU CARD SCROLL ANIMATION */

const menuCards = document.querySelectorAll(".menu-card");

function revealMenuCards(){

menuCards.forEach((card, index) => {

let position = card.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

if(position < windowHeight - 120){

setTimeout(() => {
card.classList.add("show-card");
}, index * 200);

}

});

}

window.addEventListener("scroll", revealMenuCards);



/* BOOK SECTION SCROLL ANIMATION */

const bookSection = document.querySelector(".stackly-book");

window.addEventListener("scroll", () => {

let position = bookSection.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 120){

bookSection.classList.add("show-book");

}

});



/* FOOTER SCROLL ANIMATION */

const footerElements = document.querySelectorAll(
".footer-subscribe, .footer-logo, .footer-links, .footer-contact, .footer-social, .footer-bottom"
);

function revealFooter(){

footerElements.forEach((el, index) => {

let position = el.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

if(position < windowHeight - 120){

setTimeout(() => {
el.classList.add("footer-show");
}, index * 150);

}

});

}

window.addEventListener("scroll", revealFooter);




function validateEmail(){

let email = document.getElementById("emailInput").value;
let error = document.getElementById("emailError");

/* email regex */

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email === ""){

error.innerHTML = "Please add your email";

}

else if(!email.match(emailPattern)){

error.innerHTML = "Please enter a valid email";

}

else{

error.innerHTML = "";
window.location.href = "404page.html";

}

}




/* HERO TEXT ANIMATION */

const heroTitle = document.querySelector(".about-hero-content");

window.addEventListener("scroll",()=>{

let position = heroTitle.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){

heroTitle.classList.add("hero-show");

}

});




/* ABOUT SECTION ANIMATION */

const e = document.querySelectorAll(
".about-pattern, .about-content, .about-image"
);

window.addEventListener("scroll",()=>{

e.forEach(el=>{

let position = el.getBoundingClientRect().top;
let screenHeight = window.innerHeight;

if(position < screenHeight - 100){

el.classList.add("about-show");

}

});

});




let f = document.querySelectorAll(".reserve-img");

let baby = 0;

/* AUTO CHANGE IMAGE */

function showSlide(i){

f.forEach(slide => slide.classList.remove("active"));

f[i].classList.add("active");

}

function nextSlide(){

baby++;

if(baby >= f.length){

index = 0;

}

showSlide(baby);

}

function prevSlide(){

baby--;

if(baby < 0){

baby = slides.length - 1;

}

showSlide(baby);

}

/* AUTO SLIDE */

setInterval(nextSlide,4000);


/* SCROLL IMAGE CHANGE */

window.addEventListener("scroll",()=>{

let scrollPosition = window.scrollY;

let slideIndex = Math.floor(scrollPosition / 300) % f.length;

showSlide(slideIndex);

});



const m = document.querySelector(".special-container");

window.addEventListener("scroll", () => {

let position = m.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

if(position < screenPosition - 100){

m.classList.add("special-show");

}

});


const track = document.querySelector(".gallery-track");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

track.style.transform = "translateX(-" + scroll * 0.4 + "px)";

});









function go404(){
window.location.href="404page.html";
}

/* scroll animation */

const services = document.querySelectorAll(".stackly-service-card");

window.addEventListener("scroll",()=>{

services.forEach(service=>{

const top = service.getBoundingClientRect().top;

if(top < window.innerHeight - 50){

service.style.opacity="1";
service.style.transform="translateY(0)";

}

});

});






function go404(){
window.location.href="404page.html";
}











// Blog scroll animation

const blogCards = document.querySelectorAll(".blog-card");

function revealBlog(){

blogCards.forEach(card => {

let windowHeight = window.innerHeight;
let revealTop = card.getBoundingClientRect().top;
let revealPoint = 120;

if(revealTop < windowHeight - revealPoint){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", revealBlog);










const revealElements = document.querySelectorAll(
".blog-main img, .blog-main p, .blog-author, .comment, .blog-sidebar"
);

function revealScroll(){

revealElements.forEach(el => {

let windowHeight = window.innerHeight;
let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 80){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", revealScroll);
window.addEventListener("load", revealScroll);









const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || message === ""){

errorMsg.innerText = "Please fill the form";

}else{

window.location.href = "404page.html";

}

});



const scrollBtn = document.getElementById("stacklyScrollTop");

if(scrollBtn){

window.addEventListener("scroll", function(){

if(window.scrollY > 200){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}