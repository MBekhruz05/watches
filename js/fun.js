let len230="text-len230";
let len = 500
let cardTexts= document.getElementsByClassName(len230);
for(let i=0; i<cardTexts.length; i++){
    let ct = cardTexts[i];
    if(ct.innerHTML.length>len)
        document.getElementsByClassName(len230)[i].innerHTML=ct.innerHTML.substring(0, len-3)+'...';
}
const wrapper = document.getElementById("bubble-wrapper");

let index = 0;

const Color = {
  Red: "239, 83, 80",
  Orange: "255, 160, 0",
  Yellow: "253, 216, 53",
  Green: "42, 252, 152",
  Blue: "41, 121, 255",
  Indigo: "57, 73, 171",
  Violet: "103, 58, 183"
}

const colors = [
  Color.Red, 
  Color.Orange, 
  Color.Yellow, 
  Color.Green, 
  Color.Blue, 
  Color.Indigo, 
  Color.Violet
];

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  
  bubble.style.left = `${x}px`;
  
  // Uncomment this for rainbow effect
  // bubble.style.backgroundColor = `rgb(${colors[index++ % 7]})`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);