const productDownArrow = document.getElementById('product-dropdown');
const productDropDownMenu = document.getElementById('product-drop-menu');
const productLink = document.getElementById('product-link')

const companyDownArrow = document.getElementById('company-dropdown');
const companyDropDownMenu = document.getElementById('company-drop-menu');
const companyLink = document.getElementById('company-link')

const connectDownArrow = document.getElementById('connect-dropdown');
const connectDropDownMenu = document.getElementById('connect-drop-menu');
const connectLink = document.getElementById('connect-link')




productLink.addEventListener('click', () => {
    productDropDownMenu.classList.toggle('show');
    productLink.classList.toggle('underline');
    productDownArrow.classList.toggle('rotate');
});

companyLink.addEventListener('click', () => {
    companyDropDownMenu.classList.toggle('show');
    companyLink.classList.toggle('underline');
    companyDownArrow.classList.toggle('rotate');
    
});

connectLink.addEventListener('click', () => {
    connectDropDownMenu.classList.toggle('show');
    connectLink.classList.toggle('underline');
    connectDownArrow.classList.toggle('rotate');
});
