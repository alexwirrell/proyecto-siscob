import {edit_costcenter} from '/js/pages/configuration/cost_center/edit_costcenter.js'
import {delCeco, listcostcenter} from '../js/controllers/cecoController.js'

import {open_close_menu} from './dropdownMenu.js'
import {list} from './main.js';

async function read() {
  const dt = new DataTable();
  dt.createtable(await listcostcenter());
  if(!body.classList.contains("body_move")) {
      open_close_menu(list);
  }
}

function edit(selected){
  if(selected.length > 1 || selected.length === 0){
    alert("Solo se puede editar un elemento a la vez.\nSeleccione uno.");
  } else {
    const optionconfiguration = document.querySelector('.title h2').innerText.split('/')[1].trim();
    document.querySelector('.title h2').innerText = 'Configuración / ' + optionconfiguration + ' / Editar'
    edit_costcenter(selected[0].values,  'Centro de costos');
    // la idea es que haya un objeto que tenga las opciones que tiene configuración y dependiendo de 'optionconfiguration' ejecute la función correspondiente
  };
}

function del(selected){
  if(selected.length === 0){
    alert("Seleccione al menos una opción para eliminar.");
  } else {
    if(confirm("¿Esta seguro que desea eliminar los datos?")){
      const regDel = selected.map((element) => element.values[0]);
      //document.querySelector('input[data-id="109200919185911000"]').parentElement.parentElement
      delCeco(...regDel);
      //TODO: al eliminar elementos se debe refrescar la tabla
    } else {
      alert("no, me dió miedo");
    }
    //edit_costcenter(selected[0].values, optionconfiguration);
    // la idea es que haya un objeto que tenga las opciones que tiene configuración y dependiendo de 'optionconfiguration' ejecute la función correspondiente
  };
}




class DataTable {
    element;
    headers;
    items;
    copyItems;
    selected;
    pagination;
    numberOfEntries;
    headerButtons;
  
    constructor() {
      
      const headerButtons = [
        {
          id: 'bEdit',
          text: 'edit',
          icon: 'edit',
          action: () => {
            edit(this.getSelected())
          },
          href: '#Editar'
        },
        {
          id: 'bDel',
          text: 'delete',
          icon: 'delete',
          action: () => {
            del(this.getSelected())
          },
          href: '#Eliminar'
        },
        {
          id: 'bPdf',
          text: 'pdf',
          icon: 'pdf',
          action: function () {
              //código callback
          }
        },
        {
          id: 'bXls',
          text: 'excel',
          icon: 'excel',
          action: function () {
              //código callback
          }
        }
      ]
  
      const table = document.createElement('table');
      table.id = "datatable"
      table.setAttribute('class', 'datatable');
      document.querySelector(".content").innerHTML = table.outerHTML;
      this.element = document.querySelector('#datatable');
  
      this.headers = [];
      this.items = [];
      this.pagination = {
        total: 0,
        noItemsPerPage: 0,
        noPages: 0,
        actual: 0,
        pointer: 0,
        diff: 0,
        lastPageBeforeDots: 0,
        noButtonsBeforeDots: 4,
      };
  
      this.selected = [];
      this.numberOfEntries = 5;
      this.headerButtons = headerButtons;
    }
  
    parse(headers) {
      for (const iterator of headers) {
        this.headers.push(iterator);
      }
      this.makeTable();
    }
  
    makeTable() {
      this.copyItems = [...this.items];
      this.initPagination(this.items.length, this.numberOfEntries);
      const container = document.createElement("div");
      container.id = this.element.id;
      this.element.innerHTML = "";
      this.element.replaceWith(container);
      this.element = container;
      this.createHTML();
      this.renderHeaders();
      this.renderRows();
      this.renderPagesButtons();
      this.renderHeaderButtons();
      this.renderSearch();
      this.renderSelectEntries();
    }
  
    initPagination(total, entries) {
      this.pagination.total = total;
      this.pagination.noItemsPerPage = entries;
      this.pagination.noPages = Math.ceil(
        this.pagination.total / this.pagination.noItemsPerPage
      );
      this.pagination.actual = 1;
      this.pagination.pointer = 0;
      this.pagination.diff =
        this.pagination.noItemsPerPage -
        (this.pagination.total % this.pagination.noItemsPerPage);
    }
  
    generateUUID() {
      return (Date.now() * Math.floor(Math.random() * 100000)).toString();
    }
  
    createHTML() {
      this.element.innerHTML = `
      
      <div class="datatable-container">
          <div class="header-tools">
              <div class="tools">
                  <ul class="header-buttons-container">
  
                  </ul>
              </div>
              <div class="search">
                  <input type="text" name="" id="" class="search-input">
              </div>
          </div>
  
          <table class="datatable">
              <thead>
                  <tr></tr>
              </thead>
              <tbody>
  
              </tbody>
          </table>
          
          <div class="footer-tools">
              <div class="list-items">
                  Show
                  <select name="n-entries" id="n-entries" class="n-entries">
  
                  </select>
                  entries
              </div>
  
              <div class="pages">
                  
              </div>
          </div>
      </div>
      
      `;
    }
    renderHeaders() {
      this.element.querySelector("thead tr").innerHTML = "";
      this.headers.forEach(header => {
        this.element.querySelector("thead tr").innerHTML += `<th>${header}</th>`;
      });
    }
    renderRows() {
      this.element.querySelector("tbody").innerHTML = "";
  
      let i = 0;
      const { pointer, total } = this.pagination;
      const limit = this.pagination.actual * this.pagination.noItemsPerPage;
  
      for (i = pointer; i < limit; i++) {
        if (i === total) break;
  
        const { id, values } = this.copyItems[i];
        const checked = this.isChecked(id);
  
        let data = "";
  
        data += `
          <td class="table-checkbox">
              <input type="checkbox" class="datatable-checkbox" data-id="${id}" ${
          checked ? "checked" : ""
        }/>
          </td>
        `;
  
        values.forEach((cell) => {
          data += `<td>${cell}</td>`;
        });
  
        this.element.querySelector("tbody").innerHTML += `<tr>${data}</ts>`;
  
        //listener para el checkbox
        document.querySelectorAll(".datatable-checkbox").forEach((checkbox) => {
          checkbox.addEventListener("click", (e) => {
            const element = e.target;
            const id = element.getAttribute("data-id");
  
            if (element.checked) {
              const item = this.getItem(id);
              this.selected.push(item);
            } else {
              this.removeSelected(id);
            }
            //console.log(this.selected[0].values[1]);
            //console.log(this.getSelected());
          });
        });
      }
    }
  
    isChecked(id) {
      const items = this.selected;
      let res = false;
  
      if (items.length === 0) return false;
  
      items.forEach((item) => {
        if (item.id === id) res = true;
      });
  
      return res;
    }
  
    getItem(id) {
      const res = this.items.filter((item) => item.id === id);
      if (res.length === 0) return null;
      return res[0];
    }
  
    removeSelected(id) {
      const res = this.selected.filter((item) => item.id !== id);
      this.selected = [...res];
    }
  
    renderPagesButtons() {
      const pagesContainer = this.element.querySelector(".pages");
      let pages = "";
  
      const buttonsToShow = this.pagination.noButtonsBeforeDots;
      const actualIndex = this.pagination.actual;
  
      let limI = Math.max(actualIndex - 2, 1);
      let limS = Math.min(actualIndex + 2, this.pagination.noPages);
      const missingButtons = buttonsToShow - (limS - limI);
  
      if (Math.max(limI - missingButtons, 0)) {
        limI = limI - missingButtons;
      } else if (
        Math.min(limS + missingButtons, this.pagination.noPages) !== this.pagination.noPages) {
        limS = limS + missingButtons;
      }
  
      if (limS < this.pagination.noPages - 2) {
        pages += this.getIterateButtons(limI, limS);
        pages += `<li>...</li>`;
        pages += this.getIterateButtons(
          this.pagination.noPages - 1,
          this.pagination.noPages
        );
      } else {
        pages += this.getIterateButtons(limI, this.pagination.noPages);
      }
  
      pagesContainer.innerHTML = `<ul>${pages}</ul>`;
  
      this.element.querySelectorAll('.pages li button').forEach(button => {
        button.addEventListener('click', e => {
          this.pagination.actual = parseInt(e.target.getAttribute('data-page'));
          this.pagination.pointer = (this.pagination.actual * this.pagination.noItemsPerPage) - this.pagination.noItemsPerPage;
          this.renderRows();
          this.renderPagesButtons();
        });
      });
    }
  
    getIterateButtons(start, end) {
      let res = "";
      for (let i = start; i <= end; i++) {
        if (i === this.pagination.actual) {
          res += `<li><span class="active">${i}</span></li>`;
        } else {
          res += `<li><button data-page="${i}">${i}</button></li>`;
        }
      }
      return res;
    }
  
    renderHeaderButtons() {
      let html = "";
      const buttonsContainer = this.element.querySelector('.header-buttons-container');
      const headerButtons = this.headerButtons;
      headerButtons.forEach(button => {
        html += 
        `<li>
          <a href="${button.href}">
            <button id="${button.id}">
              <img src="/assets/icons/${button.icon}.svg">
            </button>
          </a>
        </li>`
      });
      buttonsContainer.innerHTML = html;
  
      headerButtons.forEach(button => {
        document.querySelector("#" + button.id).addEventListener('click', button.action);
      })
    }
    renderSearch() {
      this.element.querySelector('.search-input').addEventListener('input', e => {
        const query = e.target.value.trim().toLowerCase();
        if(query === ""){
          this.copyItems = [...this.items];
          this.initPagination(this.copyItems.length, this.numberOfEntries);
          this.renderRows();
          this.renderPagesButtons();
          return;
        }
        this.search(query);
        this.initPagination(this.copyItems.length, this.numberOfEntries);
        this.renderRows();
        this.renderPagesButtons();
      });
    }
  
    search(query){
      let res = [];
      this.copyItems = [...this.items];
      for(let i = 0; i < this.copyItems.length; i++){
        const {id, values} = this.copyItems[i];
        const row = values;
    
        for(let j = 0; j < row.length; j++) {
          const cell = row[j];
          if(typeof cell === 'number' && cell.toString().indexOf(query) >= 0) {
            res.push(this.copyItems[i]);
            break;
          }
          if(typeof cell === 'string' && cell.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
            res.push(this.copyItems[i]);
            break;
          }
        }
      }
      this.copyItems = [...res];
    };
    
  
    renderSelectEntries() {
      const select = this.element.querySelector('#n-entries');
  
      const html = [5,10,15].reduce((acc, item) => {
        return acc += `<option value="${item}" ${this.numberOfEntries === item? 'selected' : ""}>${item}</option>`
      }, '');
  
      select.innerHTML = html;
  
      this.element.querySelector('#n-entries').addEventListener('change', e => {
        const numberOfEntries = parseInt(e.target.value);
        this.numberOfEntries = numberOfEntries;
  
        this.initPagination(this.copyItems.length, this.numberOfEntries);
        this.renderRows();
        this.renderPagesButtons();
        this.renderSearch();
      });
    }
    
    getSelected(){
      return this.selected;
    }
  
    add(item){
      const row = {
        id: this.generateUUID(),
        values:[]
      };
  
      row.values = [...item];
      this.items = [row, ...this.items];
      this.makeTable();
    }
//////////
    addData(data) {
      this.items.push(data);
      this.makeTable();
    }
  
    removeItems(id) {
      this.items = this.items.filter(item => item.id !== id);
      console.log(this.items);
      this.makeTable();
    }
//////////
    createtable(data) {
      const dt = this;
      dt.parse(["", ...Object.keys(data[0])]);
      
      data.forEach((data)=> {
          dt.add([ ...Object.values(data)]);
      });
    };
  }

  

  export {DataTable, read};