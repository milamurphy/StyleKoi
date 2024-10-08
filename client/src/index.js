import React from "react";
import ReactDOM from "react-dom";
import "./css/final-index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function handleScroll() {
  var element = document.querySelector(".navbar");
  var elementLinks = element.querySelectorAll("a");
  var scroll = window.scrollY || window.pageYOffset;

  if (element) {
    if (scroll > 550) {
      element.style.transition = "background-color 0.6s, color 0.6s";
      element.style.background = "#E53D1C";
      element.style.borderBottom = "2px solid transparent";
      element.style.color = "#000";
      elementLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          link.style.borderBottom = "2px solid #000";
        });

        link.addEventListener("mouseleave", () => {
          link.style.borderBottom = "2px solid transparent";
        });
      });
    } else {
      element.style.transition = "background-color 0.6s, color 0.6s";
      element.style.background = "white";
      element.style.borderBottom = "1px solid #eee";
      element.style.color = "#E53D1C";
      elementLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          link.style.borderBottom = "2px solid #E53D1C";
        });

        link.addEventListener("mouseleave", () => {
          link.style.borderBottom = "2px solid transparent";
        });
      });
    }

    // Iterate through each link in elementLinks NodeList
  }
}

document.addEventListener("scroll", handleScroll);

ReactDOM.render(<App />, document.getElementById(`root`));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
