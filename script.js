let userNameRef = document.querySelector("#username");
let passwordRef = document.querySelector("#password");
let eyeLeft = document.querySelector(".eyeball-left");
let eyeRight = document.querySelector(".eyeball-right");
let handLeft = document.querySelector(".hand-left");
let handRight = document.querySelector(".hand-right");

let normalEyeStyle = () => {
  eyeLeft.style.cssText = `
        left : 0.6em;
        top : 0.6em;
    `;
  eyeRight.style.cssText = `
    right : 0.6e,;
    top : 0.6em;
  `;
};

let normalHandStyle = () => {
  handLeft.style.cssText = `
        height : 2.81em;
        top : 8.4em;
        left : 7.5em; 
        transform : rotate(0deg);
    `;
  handRight.style.cssText = `
        height : 2.81em;
        top : 8.4em;
        right : 7.5em; 
        transform : rotate(0deg);
    `;
};

userNameRef.addEventListener("focus", () => {
  eyeLeft.style.cssText = `
        left : 0.75em;
        top : 1.12em;
    `;
  eyeRight.style.cssText = `
     right : 0.75em;
     top : 1.12em;
    `;
  normalHandStyle();
});

passwordRef.addEventListener("focus", () => {
  handLeft.style.cssText = `
        height : 6.56em;
        top : 3.87em;
        left : 11.75em;
        transform : rotate(-155deg)
    `;
  handRight.style.cssText = `
        height : 6.56em;
        top : 3.87em;
        right : 11.75em;
        transform : rotate(155deg)
    `;
  normalEyeStyle();
});

document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem !== userNameRef && clickedElem !== passwordRef) {
    normalHandStyle();
    normalEyeStyle();
  }
});
