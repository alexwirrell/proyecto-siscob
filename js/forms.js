document.querySelectorAll("input.active_input-text").forEach((listCheck) => {
  listCheck.addEventListener("click", () => {
    let input_text_desde = listCheck.nextElementSibling.nextElementSibling;
    let input_text_hasta =
      listCheck.nextElementSibling.nextElementSibling.nextElementSibling;

    if (input_text_desde.disabled) {
      input_text_desde.disabled = false;
    } else {
      input_text_desde.disabled = true;
      input_text_desde.value = "";
    }

    if (input_text_hasta.disabled) {
      input_text_hasta.disabled = false;
    } else {
      input_text_hasta.disabled = true;
      input_text_hasta.value = "";
    }
  });
});

document
  .querySelectorAll("input.active_input-text_select")
  .forEach((listCheck) => {
    listCheck.addEventListener("click", () => {
      let input_text_desde = listCheck.nextElementSibling.nextElementSibling;

      if (input_text_desde.disabled) {
        input_text_desde.disabled = false;
      } else {
        input_text_desde.disabled = true;
        input_text_desde.value = "";
      }
    });
  });

/* Código de la lista de checkbox */

const checkbox = document.getElementById("tipocomprobante");
const textInput = document.getElementById("entry");
var checkList = document.getElementById("list1");

checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else if (
    !checkList.classList.contains("visible") &&
    document.getElementById("tipocomprobante").checked
  ) {
    checkList.classList.add("visible");
  }
};

checkbox.addEventListener("change", (event) => {
  textInput.disabled = !event.target.checked;
  if (textInput.disabled) {
    document.querySelector("#list1").classList.remove("visible");
  }
});

document.getElementById("entry").addEventListener("input", function () {
  // Obtener el patrón de búsqueda
  var search = this.value.toLowerCase();

  // Obtener todas las opciones de la lista
  var options = document.querySelectorAll("#list1 li");

  // Mostrar solo las opciones que coincidan con el patrón de búsqueda
  options.forEach(function (option) {
    if (option.textContent.toLowerCase().indexOf(search) !== -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});