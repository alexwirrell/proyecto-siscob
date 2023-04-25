import { cecoService } from '../services/cecoService.js';

const ceco = new cecoService();

async function listcostcenter() {
    return ceco.obtenerRegistros();
}

async function addCeco(addData) {
    return ceco.crearRegistro(addData);
}

async function editCeco(id, editData) {
    return ceco.actualizarRegistro(id, editData);
}

async function delCeco(delData) {
    const rs = await ceco.eliminarRegistro(delData);
    console.log(rs);
}

export { listcostcenter, addCeco, editCeco, delCeco };

