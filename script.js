const input = document.getElementById("myinput");
const cards = document.querySelectorAll(".container > .card");

input.addEventListener("keyup", function() {
    const search = input.value.toLowerCase();

    cards.forEach(card => {
        const year = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = year.includes(search) ? "block" : "none";
    });
});


cards.forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if(link) window.location.href = link;
    });
});