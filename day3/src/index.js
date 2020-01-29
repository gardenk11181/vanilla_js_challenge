// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

var h2 = document.querySelector("h2");
const superEventHandler = {
    hoverHandler: function() {
        h2.innerHTML = "The mouse is here!";
        h2.style.color = colors[0];
    },
    resizeHandler: function() {
        h2.innerHTML = "You just resized!";
        h2.style.color = colors[2];
    },
    mouseOutHandler: function() {
        h2.innerHTML = "The mouse is gone!";
        h2.style.color = colors[1];
    },
    rightClickHandler: function() {
        h2.innerHTML = "That was a right click!"
        h2.style.color = colors[3];
    }
    
};

window.addEventListener("resize",superEventHandler.resizeHandler);
h2.addEventListener("mouseover",superEventHandler.hoverHandler);
h2.addEventListener("mouseout", superEventHandler.mouseOutHandler);
h2.addEventListener("auxclick", superEventHandler.rightClickHandler);
