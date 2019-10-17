const button = document.querySelector("button");

const tbody = document.querySelector("table>tbody");
let counter = 1;

//createInputOnTable('jose', 'guzman', 'email');

button.addEventListener("click", function() {
  const inputName = document.getElementById("inputName");
  console.log(inputName.value);

  const inputSurname = document.getElementById("inputSurname");
  console.log(inputSurname.value);

  const inputEmail = document.getElementById("inputEmail");
  console.log(inputEmail.value);
  if (
    inputName.value.length != 0 ||
    inputSurname.value.length != 0 ||
    inputEmail.value.length != 0
  ) {
    createInputOnTable(inputName.value, inputSurname.value, inputEmail.value);
  }
  inputName.value = "";
  inputSurname.value = "";
  inputEmail.value = "";
});

function createInputOnTable(inputName, inputSurname, inputEmail) {
  const newTr = document.createElement("tr");

  const newTh = document.createElement("th");
  newTh.setAttribute("scope", "row");
  newTh.innerHTML = counter++;
  console.log(newTh);

  const thName = document.createElement("td");
  thName.innerHTML = inputName;
  console.log(thName);

  const ThSurname = document.createElement("td");
  ThSurname.innerHTML = inputSurname;
  console.log(ThSurname);

  const thEmail = document.createElement("td");
  thEmail.innerHTML = inputEmail;
  console.log(thEmail);

  newTr.appendChild(newTh);
  newTr.appendChild(thName);
  newTr.appendChild(ThSurname);
  newTr.appendChild(thEmail);
  tbody.appendChild(newTr);
}
