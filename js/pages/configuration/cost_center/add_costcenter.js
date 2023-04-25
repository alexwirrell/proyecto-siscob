import {open_close_menu} from '../../../dropdownMenu.js'
import {list} from '../../../main.js';
import {addCeco} from '../../../controllers/cecoController.js'

function add_costcenter() {
    const add_costcenter =
  `
  <form id="add_costcenter" action="/enviar">
    <div class="div-row">
      <p class="label-without_check label-without_check-ext">Ingrese los siguientes datos:</p>
    </div>

    <div class="div-row div-row-ext">
      <label for="codceco" class="label-without_check label-without_check-ext2">Código</label>
      <input id="codceco" type="text" class="data-app data-app_ext">
    </div>

    <div class="div-row div-row-ext">
      <label for="nomceco" class="label-without_check label-without_check-ext2">Nombre</label>
      <input id="nomceco" type="text" class="data-app data-app_ext">
    </div>

    <div class="div-row">
      <label for="activo" class="label-without_check label-without_check-ext2">Activo</label>
      <input id="activo" type="checkbox" name="movimiento">
    </div>

    <div class="div-row center-div">
      <input type="submit" value="Cancelar" class="two_buttons" onclick="">
      <input type="submit" value="Aceptar" class="two_buttons">
    </div>
  </form>
  `
  document.querySelector(".content").innerHTML = add_costcenter;

  open_close_menu(list);
  
  addCostCenter("add_costcenter")
};



function addCostCenter(idform) {

  const formulario = document.getElementById(idform);

  formulario.addEventListener("submit", (event) => {
    // Previene el envío del formulario
    event.preventDefault();

    // Obtiene el botón que se hizo clic
    const botonClicado = event.submitter;

    // Obtiene el valor del botón que se hizo clic
    const accion = botonClicado.value;

    // Imprime el mensaje correspondiente en la consola
    if (accion === "Cancelar") {
      location.href='menu.html';
    } else if (accion === "Aceptar") {
      const addData = {
        cc_cod: document.querySelector('#codceco').value,
        cc_nom: document.querySelector('#nomceco').value,
        cc_estado: document.querySelector('#activo').checked ? 1 : 0
      }
      addCeco(addData)
    }
  });
}


export {add_costcenter};