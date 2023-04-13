function esfa() {
    const esfa =
`
<form action="javascript:alert('Hello there, I am being submitted');">

<div class="div-row">

  <fieldset class="group-fields">

    <legend>Información requerida</legend>
    <input type="checkbox" name="movimiento" id="mov">
    <label for="mov" class="label-check">Movimiento</label>

    <input type="checkbox" name="saldos" id="saldos">
    <label for="saldos" class="label-check">Saldos</label>

  </fieldset>
</div>

<div class="div-row">
  <label for="nvlcuenta" class="label-without_check">Nivel de la cuenta</label>
  <select name="nvlcuenta" id="" class="data-app data-app_ext">
    <option value="1">A 1 dígito</option>
    <option value="2">A 2 dígitos</option>
    <option value="3">A 4 dígitos</option>
    <option value="4">A 6 dígitos</option>
    <option value="4">A máximo nivel</option>
  </select>
</div>

<div class="div-deshasta">
  <label for="desde" class="label-deshasta">Desde</label>
  <label for="hasta" class="label-deshasta">Hasta</label>
</div>

<div class="div-row">
  <label for="periodo" class="label-without_check">Periodo</label>
  <input name="periodo_desde" type="text" class="data-app">
  <input name="periodo_hasta" type="text" class="data-app">
</div>


<div class="div-row center-div">
  <input type="submit" value="Cancelar" class="two_buttons">
  <input type="submit" value="Aceptar" class="two_buttons">
</div>

<!--Pruebas a partir de aquí-->


<!--Pruebas hasta aquí-->

</form>
`
return document.querySelector(".content").innerHTML = esfa;
};

export {esfa};