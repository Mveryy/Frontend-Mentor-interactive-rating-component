let button = document.querySelectorAll(".button");
let num = "";

button.forEach((item, key) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("buttonActive")) {
            item.classList.remove("buttonActive");
            num = "";
        } else {
            limparButton();
            item.classList.add("buttonActive");
            num = key + 1;
        }
    });
});

let submitButton = document.getElementById("submit");
let boxRating = document.querySelector(".boxRating");
let boxThanks = document.querySelector(".boxThanks");
let select = document.getElementById("select");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (num != "") {
        boxRating.classList.toggle("hidden");
        boxThanks.classList.toggle("hidden");
        select.innerText = `You selected ${num} out of 5`;
    }
});

function limparButton() {
    button.forEach((item) => {
        item.classList.remove("buttonActive");
    });
}
