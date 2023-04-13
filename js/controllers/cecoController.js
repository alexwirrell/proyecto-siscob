
import {cecoService} from '../services/cecoService.js'
import {DataTable} from '../datatable.js'

import {open_close_menu} from '../dropdownMenu.js'
import {list} from '../main.js';

async function listcostcenter() {
    const ceco = new cecoService();
    const cecos = await ceco.obtenerRegistros();

    const dt = new DataTable()
    dt.createtable(cecos);
    open_close_menu(list);
}

async function addCeco(addData) {
    const ceco = new cecoService();
    const rs = await ceco.crearRegistro(addData);
}

async function editCeco(id, editData) {
    const ceco = new cecoService();
    const rs = await ceco.actualizarRegistro(id, editData);
}

async function delCeco(delData) {
    const ceco = new cecoService();
    const rs = await ceco.eliminarRegistro(delData);
}

export { listcostcenter, addCeco, editCeco, delCeco };

