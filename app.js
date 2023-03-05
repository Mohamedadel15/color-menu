// the id # for all color components
let text = document.querySelectorAll("section .card p");
// the back ground color component in the cards
let color = document.getElementsByClassName("color");
// number of child element in this section
let numberCard = document.querySelector("section").childElementCount;
//  the  button random color component
let btn = document.querySelector("button");
let logo = document.getElementById("logo");
let body = document.body;

// this to display the background color body constant
let rgbColor = localStorage.getItem("bodyBackground");
body.style.backgroundColor = rgbColor;

// this loop to save the color and id when load the window!!!!!
for (let i = 0; i < numberCard; i++) {
  color[i].style.backgroundColor = localStorage.getItem(`num${i}`);
  text[i].innerHTML = localStorage.getItem(`iD${i}`);
}
// event when clicked on this element the text & card .background-color will change
btn.addEventListener("click", () => {
  for (let i = 0; i < numberCard; i++) {
    //  this equation to make the hex-dismal number for id color
    let num = Math.floor(Math.random() * 0xffffff).toString(16);
    text[i].innerHTML = `#${num}`;
    color[i].style.backgroundColor = `#${num}`;
    // TO save the all info in my local storage
    localStorage.setItem(`iD${i}`, `#${num}`);
  }
});
for (const i of color) {
  i.addEventListener("click", myFunction);
}

function myFunction(e) {
  let new_backgroundBody = e.target.style.backgroundColor;
  let text = e.target.parentNode.lastElementChild;
  body.style.backgroundColor = new_backgroundBody;
  logo.style.color = new_backgroundBody;
  text.innerHTML="coped"
  setTimeout(()=>text.innerHTML=new_backgroundBody,1000)
  localStorage.setItem("bodyBackground", new_backgroundBody);
  //  to copy the text !!
  navigator.clipboard.writeText(new_backgroundBody);
}
