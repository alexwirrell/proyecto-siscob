import { contentPage } from "./pages.js";

const updateTitle = (label) => {
  if(label !== undefined || label === null) {
    const projectTitle = document.querySelector('.title h2');
    const parts = [
      label.parentElement.parentElement.previousElementSibling.innerText,
      label.innerText
    ];
    if (label.parentElement.parentElement.previousElementSibling.parentElement.parentElement.previousElementSibling.innerText !== 'Proyecto SISCOB') {
      parts.unshift(label.parentElement.parentElement.previousElementSibling.parentElement.parentElement.previousElementSibling.innerText);
    }
    projectTitle.innerText = parts.join(" / ");
  }
};

const router = (route) => {
  const label = document.querySelectorAll(`a[href="${route}"]`)[0];
  if(label && label.classList && label.classList.contains('nav__link')){
    updateTitle(label);
  }
  contentPage(route);
};

export { router };


