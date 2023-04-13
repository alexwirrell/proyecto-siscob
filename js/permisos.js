
document.querySelectorAll('.permisos_list-click').forEach(
    (optionMainMenu, index) => {
        optionMainMenu.addEventListener('click', 
            () => {
                
                let child = 1;
                if(index > 2){
                    child = 0;
                }

                if(optionMainMenu.nextElementSibling.style.display === 'block') {
                    optionMainMenu.nextElementSibling.style.display = "none"
                    document.querySelectorAll('.permisos_list-click')[index].childNodes[child].src = "../../../assets/icons/plus.svg"
                } else {
                    optionMainMenu.nextElementSibling.style.display = "block"
                    document.querySelectorAll('.permisos_list-click')[index].childNodes[child].src = "../../../assets/icons/minus.svg"
                }
            }
    )
})