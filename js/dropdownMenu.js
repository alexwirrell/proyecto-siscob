class List {
    constructor(container, content) {
      this.listElements = document.querySelectorAll(container);
      this.mainList = this.listElements[2].nextElementSibling;
      this.sublistElements = document.querySelectorAll(content);
  
      this.listElements.forEach((listElement, indice) => {
        listElement.addEventListener("click", () => {
          const item = listElement.nextElementSibling;
          this.validateArrow(indice);
          listElement.classList.toggle("arrow");
          const height = item.clientHeight == "0" ? item.scrollHeight : "auto";
          this.setElementHeight(item, height);
        });
      });
  
      this.sublistElements.forEach((listElement, indice) => {
        listElement.addEventListener("click", () => {
          const subList = listElement.nextElementSibling;
          this.validateArrowSub(subList, indice);
          listElement.classList.toggle("arrow");
          if (!listElement.classList.contains("arrow")) {
            this.reduceMainListHeight(subList.scrollHeight * 2);
            this.setElementHeight(subList, 0);
          }
        });
      });
    }
  
    setElementHeight(element, height) {
      element.style.height = height + "px";
    }
  
    validateArrow(indice) {
      this.listElements.forEach((item, indiceItem) => {
        this.setElementHeight(item.nextElementSibling, 0);
        if (indice !== indiceItem) {
          item.classList.remove("arrow");
        }
      });
  
      this.sublistElements.forEach((listElement) => {
        this.setElementHeight(listElement.nextElementSibling, 0);
        listElement.classList.remove("arrow");
      });
    }
  
    reduceMainListHeight(height) {
      this.setElementHeight(this.mainList, parseInt(this.mainList.style.height, 10) - height);
    }
  
    validateArrowSub(subList, indice) {
      this.sublistElements.forEach((item, indiceItem) => {
        if (indice !== indiceItem) {
          this.reduceMainListHeight(item.nextElementSibling.clientHeight);
          this.setElementHeight(item.nextElementSibling, 0);
          item.classList.remove("arrow");
        } else {
          this.setElementHeight(subList, subList.scrollHeight);
          this.setElementHeight(this.mainList, parseInt(this.mainList.style.height, 10) + subList.scrollHeight);
        }
      });
    }
  }

  function open_close_menu(list) {
    body.classList.toggle("body_move");
    function resetElement(element) {
      element.nextElementSibling.style.height = 0;
      element.classList.remove("arrow");
    }
    list.listElements.forEach(resetElement);
    list.sublistElements.forEach(resetElement);
  }

  class BuildRef {
    constructor(cssTags, insideTags) {
      this.cssTags = cssTags;
      this.insideTags = insideTags;
      this.tags = document.querySelectorAll(cssTags);
      this.indexLabel = null;
      this.contenedorElement = null;
  
      this.buildRef = this.buildRef.bind(this);
    }
  
    buildRef(selectedTag, indexLabel) {
      const partTitle = selectedTag.parentElement.previousElementSibling.innerText.slice(0,3) + selectedTag.innerText.slice(0,3);
      this.contenedorElement = selectedTag.closest(this.insideTags);
  
      if (this.contenedorElement !== null) {
        selectedTag.firstElementChild.href = "#" + selectedTag.parentElement.previousElementSibling.parentElement.parentElement.previousElementSibling.innerText.slice(0,4) + partTitle + "_" + indexLabel;
        //console.log(selectedTag.firstElementChild.href = "#" + selectedTag.parentElement.previousElementSibling.parentElement.parentElement.previousElementSibling.innerText.slice(0,4) + partTitle + "_" + indexLabel);
      } else {
        selectedTag.firstElementChild.href = "#" + partTitle + "_" + indexLabel;
        //console.log(selectedTag.firstElementChild.href = "#" + partTitle + "_" + indexLabel);
      }
    }
  
    init() {
      this.tags.forEach((label) => {
        this.indexLabel = Array.prototype.indexOf.call(this.tags, label);
        let selectedTag = this.tags[this.indexLabel];
        this.buildRef(selectedTag, this.indexLabel);
      });
    }
  }

  export {BuildRef, List, open_close_menu};
