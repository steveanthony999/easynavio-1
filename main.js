const navBuilderBg = document.getElementById('nav-builder');
const colorWell = document.getElementById('colorWell');
const colorWellColor = document.getElementById('colorWellColor');
const headerColor = document.getElementById('headerColor');
const headerImg = document.getElementById('headerImg');
const fixedNav = document.getElementById('fixed');
const unFixedNav = document.getElementById('unfixed');
const navbar = document.getElementById('nav');
const cssNavBgColor = document.getElementById('css-nav-bg-color');
const cssNavPosition = document.getElementById('css-nav-position');
const navColorWell = document.getElementById('nav-color-well');
const navColorWellColor = document.getElementById('nav-color-well-color');
const transparentNav = document.getElementById('transparent');
const filledNav = document.getElementById('filled');
const navLinksText = document.querySelector('#inner-nav');
const navLinksTextWell = document.getElementById('nav-text-color-well');
const navLinksTextWellColor = document.getElementById('nav-text-color-well-color');
const cssNavLinksTextColor = document.getElementById('css-nav-text-color');
const cssNavContainerWidthText = document.getElementById('css-nav-container-width-text');
const cssNavContainerMarginText = document.getElementById('css-nav-container-margin-text');
const wideNavContainer = document.getElementById('wide');
const containedNavContainer = document.getElementById('contained');
const navHeightSkinny = document.getElementById('skinny');
const navHeightMedium = document.getElementById('medium');
const navHeightFat = document.getElementById('fat');
const navHeightSuperFat = document.getElementById('super-fat');
const cssNavHeightText = document.getElementById('css-nav-padding-tb');

// let colorWell;

const defaultColor = '#ffffff';

// Change Landing Page Color
// Change Landing Page Color
// Change Landing Page Color

// window.addEventListener('load', startup, false);

// function startup() {

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
  cssNavPosition.textContent = 'fixed';
};

unFixedNav.onclick = () => {
  navbar.style.position = 'static';
  cssNavPosition.textContent = 'static';
};

// CHANGE NAV BACKGROUND COLOR
// CHANGE NAV BACKGROUND COLOR
// CHANGE NAV BACKGROUND COLOR

let storedNavColor = '#333333';

transparentNav.onclick = () => {
  navColorWell.disabled = true;
  navColorWell.style.opacity = '0.3';
  navColorWellColor.style.opacity = '0.3';
  navbar.style.backgroundColor = 'transparent';
  cssNavBgColor.textContent = 'transparent';
};

filledNav.onclick = () => {
  navColorWell.disabled = false;
  navColorWell.style.opacity = '1';
  navColorWellColor.style.opacity = '1';
  navbar.style.backgroundColor = storedNavColor;
  cssNavBgColor.textContent = storedNavColor;
};

function navColorValue(hex) {
  storedNavColor = hex;
  return storedNavColor;
}

navColorWell.value = storedNavColor;
navColorWell.addEventListener('input', updateFirstNav, false);
navColorWell.select();

function updateFirstNav(event) {
  if (navbar) {
    navbar.style.backgroundColor = event.target.value;
    navColorWellColor.textContent = event.target.value;
    cssNavBgColor.textContent = event.target.value;
    storedNavColor = event.target.value;
  }
}

// CHANGE NAV TEXT COLOR
// CHANGE NAV TEXT COLOR
// CHANGE NAV TEXT COLOR

navLinksTextWell.value = defaultColor;
navLinksTextWell.addEventListener('input', updateFirstNavText, false);
navLinksTextWell.select();

function updateFirstNavText(event) {
  if (navbar) {
    navLinksText.style.color = event.target.value;
    navLinksTextWellColor.textContent = event.target.value;
    cssNavLinksTextColor.textContent = event.target.value;
  }
}

// CHANGE WIDTH OF NAV CONTAINER
// CHANGE WIDTH OF NAV CONTAINER
// CHANGE WIDTH OF NAV CONTAINER

cssNavContainerWidthText.style.display = 'none';
cssNavContainerMarginText.style.display = 'none';

wideNavContainer.onclick = () => {
  cssNavContainerWidthText.style.display = 'none';
  cssNavContainerMarginText.style.display = 'none';
  navLinksText.style.width = '100%';
  navLinksText.style.margin = '0';
};

containedNavContainer.onclick = () => {
  cssNavContainerWidthText.style.display = 'block';
  cssNavContainerMarginText.style.display = 'block';
  navLinksText.style.width = '800px';
  navLinksText.style.margin = '0 auto';
};

// CHANGE HEIGHT OF NAV
// CHANGE HEIGHT OF NAV
// CHANGE HEIGHT OF NAV

navbar.style.padding = '16px 32px';

navHeightSkinny.onclick = () => {
  navbar.style.padding = '8px 32px';
  cssNavHeightText.textContent = '8px';
};

navHeightMedium.onclick = () => {
  navbar.style.padding = '16px 32px';
  cssNavHeightText.textContent = '16px';
};

navHeightFat.onclick = () => {
  navbar.style.padding = '32px 32px';
  cssNavHeightText.textContent = '32px';
};

navHeightSuperFat.onclick = () => {
  navbar.style.padding = '64px 32px';
  cssNavHeightText.textContent = '64px';
};
