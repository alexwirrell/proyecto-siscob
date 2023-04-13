import {BuildRef, List, open_close_menu} from './dropdownMenu.js'
import {router} from './router.js'

export const list = new List(".list__botton--click", ".list__subbotton--click");

document.getElementById("btn_open").addEventListener("click", function() {
  open_close_menu(list);
});

const buildRef = new BuildRef('.list__inside', '.list__show .list__show');
buildRef.init();

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});