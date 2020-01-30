// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

var body = document.querySelector("body");

function repaint() {
  if (window.innerWidth > 1000) {
    body.className = "big";
  } else if (window.innerWidth > 600) {
    body.className = "";
  } else {
    body.className = "small";
  }
}

window.addEventListener("resize", repaint);
