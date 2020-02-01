// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>

const country = document.querySelector("select");
const USER_LS = "currentUser";
const currentUser = localStorage.getItem(USER_LS);
var option;

if (currentUser != null) {
  for (var i = 0; i < country.options.length; i++) {
    option = country.options[i];

    if (option.value === localStorage.getItem("country")) {
      // or
      // if (option.text = 'Malaysia') {
      option.setAttribute("selected", true);
      console.log(option.value);
      // For a single select, the job's done
    }
  }
}

function selectHandler(event) {
  const result = event.target.value;
  localStorage.setItem("country", result);
}

country.addEventListener("change", selectHandler);
