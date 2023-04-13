function laux_bprueba() {
    const laux_bprueba =
`<form action="javascript:alert('Hello there, I am being submitted');">

  <div class="div-row">

    <fieldset class="group-fields">

      <legend>Información requerida</legend>
      <input type="checkbox" name="movimiento" id="mov">
      <label for="mov" class="label-check">Movimiento</label>

      <input type="checkbox" name="saldos" id="saldos">
      <label for="saldos" class="label-check">Saldos</label>

      <input type="checkbox" name="comparativo" id="comparativo">
      <label for="comparativo" class="label-check">Comparativo</label>

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

  <div class="div-row">
    <label for="cuenta" class="label-without_check">Cuenta</label>
    <input name="cuenta_desde" type="text" class="data-app">
    <input name="cuenta_hasta" type="text" class="data-app">
  </div>

  <div class="div-row">
    <input type="checkbox" name="tercero" id="tercero" class="active_input-text">
    <label for="tercero" class="label-check">Tercero</label>
    <input name="tercero_desde" type="text" class="data-app" disabled>
    <input name="tercero_hasta" type="text" class="data-app" disabled>
  </div>

  <div class="div-row">
    <input type="checkbox" name="ceco" id="ceco" class="active_input-text">
    <label for="ceco" class="label-check">Centro</label>
    <input name="ceco_desde" type="text" class="data-app" disabled>
    <input name="ceco_hasta" type="text" class="data-app" disabled>
  </div>

  <div class="div-row">
    <input type="checkbox" name="documento" id="documento" class="active_input-text">
    <label for="documento" class="label-check">Documento</label>
    <input type="text" class="data-app" id="yourBox" disabled>
    <input type="text" class="data-app" disabled>
  </div>

  <div class="div-row">
    <input type="checkbox" name="tipocomprobante" id="tipocomprobante" class="active_input-text_select">
    <label for="tipocomprobante" class="label-check label-static">Tipo de comprobante</label>

    <div id="list1" class="dropdown-check-list" tabindex="100">
      <span class="anchor">
        <input type="text" id="entry" class="data-app data-app_ext" placeholder="Escriba y/o seleccione" autocomplete="off" disabled>
      </span>
      <ul class="items">

        <li>
          <input type="checkbox" id="option1" checked>
          <label for="option1" class="label-check label-check-ext">Recibo de caja</label>
        </li>
        <li>
          <input type="checkbox" id="option2" checked>
          <label for="option2" class="label-check label-check-ext">Comprobante de egreso</label>
        </li>
        <li>
          <input type="checkbox" id="option3" checked>
          <label for="option3" class="label-check label-check-ext">Factura de compra</label>
        </li>
        <li>
          <input type="checkbox" id="option4" checked>
          <label for="option4" class="label-check label-check-ext">Factura de venta</label>
        </li>
        <li>
          <input type="checkbox" id="option5" checked>
          <label for="option5" class="label-check label-check-ext">Ajustes</label>
        </li>


        <!--Cuando seleccione o deseleccione alguna opción se debe borrar el texto-->

      </ul>
    </div>

  </div>

  <div class="div-row center-div">
    <input type="submit" value="Cancelar" class="two_buttons">
    <input type="submit" value="Aceptar" class="two_buttons">
  </div>

  <!--Pruebas a partir de aquí-->


  <!--Pruebas hasta aquí-->

</form>`
return document.querySelector(".content").innerHTML = laux_bprueba;
};

export {laux_bprueba};