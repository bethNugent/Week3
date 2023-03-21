const cursor = document.querySelector('.cursor');

const heading = document.getElementById('heading');

const displayKey = document.querySelector('.key h2');
const displayWhich = document.querySelector('.which h2');
const displayCode = document.querySelector('.code h2');





//As the user moves the mouse, the "cursor" element will follow it on the page with an offset of 10 pixels
// from the top and left sides of the cursor.
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})




//welcome message changes when user hovers the mouse over the text
heading.addEventListener('mouseover', (event) => {
  event.target.textContent = "Press any key..."
})


heading.style.padding = '50px';




//listen for any key down and run a function using event
//change the value in the 'key value' what ever pressed key the user presses using e.key
//links the value in the 'key value' what ever pressed key the user presses using e.which
//links the keycode value to the key value using e.code
//space key does not come up with anything
//using if statement value of 'space' equal to 32
window.addEventListener('keydown', (e) => {
  displayKey.innerText = e.key;
  displayWhich.innerText = e.which;
  displayCode.innerText = e.code;
  if(e.code === 32){
    displayKey.textContent.innerText = `'space'`;
  
  }
})









