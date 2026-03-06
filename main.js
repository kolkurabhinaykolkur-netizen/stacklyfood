function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
}

const slides = [
  {title:"SPICY FRIED CHICKEN", img:"images/chicken.webp"},
  {title:"CHICAGO DEEP PIZZA", img:"images/pizza.webp"},
  {title:"BURGER KING SPECIAL", img:"images/burger.webp"}
];

let current = 0;

setInterval(()=>{
  current = (current + 1) % slides.length;

  const title = document.getElementById("heroTitle");
  const image = document.getElementById("heroImg");

  title.style.animation="none";
  image.style.animation="none";

  setTimeout(()=>{
    title.innerText = slides[current].title;
    image.src = slides[current].img;

    title.style.animation="slideFromRight 1s ease";
    image.style.animation="slideFromLeft 1s ease";
  },100);

},3000);


function toggleDropdown(){

let menu = document.getElementById("homeDropdown");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}

