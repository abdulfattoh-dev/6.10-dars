import { DATA } from "./data.js";

const contentEl = document.querySelector(".content");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = inputEl.value;

    if (value.trim = !0) {
        const divEl = document.createElement("div");
        divEl.className = "msg me";

        divEl.innerHTML = `
        <p>${value}</p>
        <span>9:54</span>
    `

        contentEl.appendChild(divEl);
        inputEl.value = ""
    }
})