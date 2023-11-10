"use strict";
{
  // get the button and set it a const
  const button = document.querySelector("button.toggle-dark-mode");

  // add an event listener
  button.addEventListener("click", () => {
     // every time we click it, flip the switch
    document.body.classList.toggle("dark")
  })
}