import {BuildRef, List, open_close_menu} from './dropdownMenu.js'

import {laux_bprueba} from './pages/reports/laux_bprueba.js'
import {esfa} from './pages/reports/esfa.js'
import {eerr} from './pages/reports/eerr.js'
import {add_costcenter} from './pages/configuration/cost_center/add_costcenter.js'
import {listcostcenter} from '/js/controllers/cecoController.js'

function contentPage(route) {
  switch (route) {
    case "#DocCor_1": return alert("Formulario en construcción para futuras actualizaciones");
    case "#DocCop_2": return alert("Formulario en construcción para futuras actualizaciones");
    case "#DocImp_3": return alert("Formulario en construcción para futuras actualizaciones");
    case "#DocLis_4": return alert("Formulario en construcción para futuras actualizaciones");
    case "#DocReg_0": return alert("Formulario en construcción para futuras actualizaciones");
    case "#RepLib_5": return laux_bprueba();
    case "#RepEst_6": return esfa();
    case "#RepEst_7": return eerr();
    case "#ConfComAgr_8": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfComImp_9": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfComLis_10": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfTerAgr_11": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfTerImp_12": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfTerLis_13": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfPlaAgr_14": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfPlaImp_15": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfPlaLis_16": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfCenAgr_17": return add_costcenter();
    case "#ConfCenImp_18": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfCenLis_19": return listcostcenter();
    case "#ConfPaíAgr_20": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfPaíLis_21": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfDepAgr_22": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfDepLis_23": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfCiuAgr_24": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfCiuLis_25": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfUsuAgr_26": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfUsuPer_27": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfUsuCop_28": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfUsuLis_29": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfEmpAgr_30": return alert("Formulario en construcción para futuras actualizaciones");
    case "#ConfEmpLis_31": return alert("Formulario en construcción para futuras actualizaciones");

    case "#prueba": console.log("¿entre?");


    default: return "No deberías estar aquí";
  }
}

export { contentPage };
