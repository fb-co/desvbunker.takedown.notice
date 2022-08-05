import { is_mobile } from "./screen.js";

const test = document.getElementById("test");

function handle_content() {
    if (is_mobile()) {
        test.innerText = "mobile";
    } else {
        test.innerText = "desktop";
    }
}

window.addEventListener("load", handle_content);
window.addEventListener("resize", handle_content);
