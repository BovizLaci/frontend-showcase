function pageLoad() {
    console.log('Az oldal betöltődött');
    document.getElementById("root").classList.add("loaded");

    function rootClicked() {
        console.log('A rootra kattintottunk');
    }

    document.getElementById("root").addEventListener("click", rootClicked);
}

window.addEventListener("load", pageLoad);