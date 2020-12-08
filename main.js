const navBuilderBg = document.getElementById('nav-builder');
const colorWellColor = document.getElementById('colorWellColor');
const headerColor = document.getElementById('headerColor');
const headerImg = document.getElementById('headerImg');
const fixedNav = document.getElementById('fixed');
const unFixedNav = document.getElementById('unfixed');
const navbar = document.getElementById('nav');

let colorWell;
let navColorWell;

const defaultColor = '#ffffff';
const navDefaultColor = '#333333';

// Change Landing Page Color
// Change Landing Page Color
// Change Landing Page Color

// window.addEventListener('load', startup, false);

// function startup() {
colorWell = document.querySelector('#colorWell');
colorWell.value = defaultColor;
colorWell.addEventListener('input', updateFirst, false);
colorWell.select();
// }

function updateFirst(event) {
  if (navBuilderBg) {
    navBuilderBg.style.backgroundColor = event.target.value;
    colorWellColor.innerHTML = event.target.value;
    headerColor.style.color = getContrast(event.target.value);
    getContrast(event.target.value) === 'black'
      ? (headerImg.src = './assets/img-cute-black.png')
      : (headerImg.src = './assets/img-cute-white.png');
  }
}

// CHANGE COLOR DYNAMICALLY ACCORDING TO BACKGROUND COLOR
// CHANGE COLOR DYNAMICALLY ACCORDING TO BACKGROUND COLOR
// CHANGE COLOR DYNAMICALLY ACCORDING TO BACKGROUND COLOR

function getContrast(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 90 ? 'black' : 'white';
}

// CHANGE NAV POSITION
// CHANGE NAV POSITION
// CHANGE NAV POSITION

fixedNav.onclick = () => {
  navbar.style.position = 'fixed';
};

unFixedNav.onclick = () => {
  navbar.style.position = 'static';
};

// CHANGE NAV BACKGROUND COLOR
// CHANGE NAV BACKGROUND COLOR
// CHANGE NAV BACKGROUND COLOR

navColorWell = document.querySelector('#navColorWell');
navColorWell.value = navDefaultColor;
navColorWell.addEventListener('input', updateFirstNav, false);
navColorWell.select();
// }

function updateFirstNav(event) {
  if (navbar) {
    navbar.style.backgroundColor = event.target.value;
    navColorWellColor.innerHTML = event.target.value;
  }
}
