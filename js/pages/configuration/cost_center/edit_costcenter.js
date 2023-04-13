import {editCeco} from '../../../controllers/cecoController.js'

function edit_costcenter(values) {

    const edit_costcenter =
`
<form id="editceco" action="/enviar-datos" method="post" class="form">
    <div class="div-row">
        <p class="label-without_check label-without_check-ext">Ingrese los siguientes datos:</p>
    </div>

    <div class="div-row div-row-ext">
        <label for="codceco" class="label-without_check label-without_check-ext2">Código</label>
        <input id="codceco" type="text" class="data-app data-app_ext" value="${values[0]}" disabled>
    </div>

    <div class="div-row div-row-ext">
        <label for="nomceco" class="label-without_check label-without_check-ext2">Nombre</label>
        <input id="nomceco" type="text" class="data-app data-app_ext" value="${values[1]}">
    </div>

    <div class="div-row">
        <label for="activo" class="label-without_check label-without_check-ext2">Activo</label>
        <input id="activo" type="checkbox" name="movimiento" ${values[2] === 1 ? "checked" : "unchecked"}>
    </div>

    <div class="div-row center-div">
        <input type="submit" value="Cancelar" class="two_buttons">
        <input type="submit" value="Aceptar" class="two_buttons">
    </div>
</form>
`
document.querySelector(".content").innerHTML = edit_costcenter;

const formulario = document.getElementById("editceco");

formulario.addEventListener("submit", (event) => {
  // Previene el envío del formulario
  event.preventDefault();

  // Obtiene el botón que se hizo clic
  const botonClicado = event.submitter;

  // Obtiene el valor del botón que se hizo clic
  const accion = botonClicado.value;

  // Imprime el mensaje correspondiente en la consola
  if (accion === "Cancelar") {
    console.log("Cancelar");
  } else if (accion === "Aceptar") {
    const editData = {
      cc_nom: document.querySelector('#nomceco').value,
      cc_estado: document.querySelector('#activo').checked ? 1 : 0
    }
    editCeco(document.querySelector('#codceco').value, editData);
  }
});
};

/* 
Pregunta:
Como ambos tienen el type submit, si yo le doy click al botón cancelar, ¿igual no enviaría los datos?

Respuesta:
En efecto, si los dos botones tienen el atributo "type" con el valor "submit", ambos enviarán el formulario cuando se haga clic en ellos, incluso el botón "Cancelar".

Si deseas que el botón "Cancelar" no envíe los datos del formulario, puedes cambiar su atributo "type" a "button". De esta manera, el botón se comportará como un botón normal y no enviará los datos del formulario
 */
export {edit_costcenter};