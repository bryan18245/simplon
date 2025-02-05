let modal = document.getElementsByClassName("modal")[0]; 
let closes = document.getElementsByClassName("close")[0]; 
let click = document.getElementById("section_modal");

click.addEventListener("click", function() {
    modal.style.display = "flex"; 
});
closes.addEventListener("click", function() {
    modal.style.display = "none"; 
});
