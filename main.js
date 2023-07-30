// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const hearts = document.querySelectorAll(`.like-glyph`)
console.log(hearts)

for (let element of hearts){
  element.addEventListener(`click`, () => {
    if (element.innerText === EMPTY_HEART) {
      element.innerText = FULL_HEART
      element.classList.add(`activated-heart`)
    }
    else if (element.innerText === FULL_HEART) {
      element.innerText = EMPTY_HEART
      element.classList.remove(`activated-heart`)
    }
  })
  
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
