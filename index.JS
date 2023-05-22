// Get all clickable elements
const clickableItems = document.querySelectorAll("a");

// Loop through clickable elements and add event listener for hover
for (let i = 0; i < clickableItems.length; i++) {
  clickableItems[i].addEventListener("mouseover", function() {
    // Change the background color to green on hover
    this.style.backgroundColor = "green";
  });

  clickableItems[i].addEventListener("mouseout", function() {
    // Change the background color back to default on mouse out
    this.style.backgroundColor = "";
  });
}

/* slide show*/
let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

var button = document.querySelector("button");
button.addEventListener("click", toggleMenu);
