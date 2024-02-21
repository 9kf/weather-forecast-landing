var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var symbol = this.querySelector(".symbol");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      symbol.innerText = "+";
    } else {
      panel.style.display = "block";
      symbol.innerText = "-";
    }
  });
}
