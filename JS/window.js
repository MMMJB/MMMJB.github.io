drag(document.getElementById("window"));

const buttons = document.querySelectorAll(".menu-item");
const tabs = document.querySelectorAll(".info-item");
var selected = document.querySelector(".menu-item.selected");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (buttons[i].classList.contains("selected")) return;
        selected.classList.remove("selected");
        document.querySelector(".active").classList.remove("active");
        buttons[i].classList.add("selected");
        tabs[i].classList.add("active");
        selected = buttons[i];
    })
}

function drag(el) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
