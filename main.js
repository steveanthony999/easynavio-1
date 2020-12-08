const navBuilderBg = document.getElementById('nav-builder');
const colorWellColor = document.getElementById('colorWellColor');
const headerColor = document.getElementById('headerColor');
const headerImg = document.getElementById('headerImg');

let colorWell;
const defaultColor = '#ffffff';

window.addEventListener('load', startup, false);

function startup() {
  colorWell = document.querySelector('#colorWell');
  colorWell.value = defaultColor;
  colorWell.addEventListener('input', updateFirst, false);
  colorWell.select();
}

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

function getContrast(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 90 ? 'black' : 'white';
}

// CHANGE NAV POSITION

const fixedNav = document.getElementById('fixed');
const unFixedNav = document.getElementById('unfixed');
const navbar = document.getElementById('nav');

fixedNav.onclick = () => {
  navbar.style.position = 'fixed';
};

unFixedNav.onclick = () => {
  navbar.style.position = 'static';
};
