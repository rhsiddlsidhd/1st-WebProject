import hello from "./variable";
import "../main.scss";
import testImage from "../assets/test_image.png";
document.getElementById("main").innerText = "a  " + hello + " 24";
console.log("11hello world11a@s@@@1");
let testImageTag = document.createElement("img");
testImageTag.src = testImage;
let body = document.querySelector("body");
body.appendChild(testImageTag);
console.log(document.body);

const currentUrl = window.location.href;
console.log("-->" + currentUrl);
console.log(currentUrl);
