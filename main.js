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
const cssNavLogoTextColor = document.getElementById('css-nav-logo-text-color');
const cssNavContainerWidthText = document.getElementById('css-nav-container-width-text');
const cssNavContainerMarginText = document.getElementById('css-nav-container-margin-text');
const wideNavContainer = document.getElementById('wide');
const containedNavContainer = document.getElementById('contained');
const navHeightSkinny = document.getElementById('skinny');
const navHeightMedium = document.getElementById('medium');
const navHeightFat = document.getElementById('fat');
const navHeightSuperFat = document.getElementById('super-fat');
const cssNavHeightText = document.getElementById('css-nav-padding-tb');
const shrinkMeCheckbox = document.getElementById('shrink-me');
const jsNavOnScroll = document.getElementById('nav-on-scroll');
const jsPaddingHeightText = document.getElementById('js-padding-height-text');
const hoverNoEffect = document.getElementById('no-effect');
const hoverScaleEffect = document.getElementById('scale');
const hoverColorEffect = document.getElementById('change-color');
const hoverScaleAndColorEffect = document.getElementById('scale-and-change-color');
const hoverLinkColorWell = document.getElementById('hover-link-color-well');
const hoverLinkTextColorWell = document.getElementById('hover-link-text-color-well');
const navLinks = document.getElementById('nav-links');
const soloLinks = navLinks.getElementsByTagName('p');
const cssLinksOnHover = document.getElementById('links-on-hover');
const cssScaleSpan = document.getElementById('scale-span');
const cssColorSpan = document.getElementById('color-span');
const cssColorSpanColor = document.getElementById('color-span-color');
const cssNavTextTransition = document.getElementById('css-nav-text-transition');
const cssNavTransition = document.getElementById('css-nav-transition');
const deviceSizeDesktop = document.getElementById('desktop');
const deviceSizeTablet = document.getElementById('tablet');
const deviceSizeMobile = document.getElementById('mobile');
const navIcon = document.getElementById('nav-icon');
const navLinksMobile = document.getElementById('nav-links-mobile');
const menuButtonDesktop = document.getElementById('desktop-menu-button');
const menuButtonTablet = document.getElementById('tablet-menu-button');
const menuButtonMobile = document.getElementById('mobile-menu-button');
const navIconSpan = document.querySelectorAll('.nav-icon-span');
const cssNavLinksMobile = document.getElementById('css-nav-links-mobile');
const jsNavMenu = document.getElementById('js-nav-menu');
const cssNavMenuMobileColor = document.getElementById('css-nav-menu-mobile-color');
const cssMediaQuery = document.getElementById('css-media-query');
const cssMediaQueryTablet = document.getElementById('css-media-query-tablet');
const cssMediaQueryMobile = document.getElementById('css-media-query-mobile');
const cssNavLinks = document.getElementById('css-nav-links');
const cssNavLinksMobileDisplayText = document.getElementById('css-nav-links-mobile-display-text');
const htmlNavLinksMobileText = document.getElementById('html-nav-links-mobile-text');
const navMobileMenu = document.getElementById('nav-mobile-menu');
const htmlNavMobileMenu = document.getElementById('html-nav-mobile-menu');
const cssNavMobileMenu = document.getElementById('css-nav-menu-mobile');
const jsNavMobileMenu = document.getElementById('js-nav-menu-mobile');
const mobileMenuBgSameAsNav = document.getElementById('same-bg-color-as-navbar');
const mobileMenuBgDifferentAsNav = document.getElementById('different-bg-color-as-navbar');
const mobileMenuColorBgWell = document.getElementById('mobile-menu-color-bg-well');
const mobileMenuColorBgWellColor = document.getElementById('mobile-menu-color-bg-well-color');
const cssNavMobileMenuBgColor = document.getElementById('css-nav-mobile-menu-bg-color');
const navMobileLinks = document.getElementById('nav-mobile-links');
const mobileMenuTextSameAsNav = document.getElementById('same-text-color-as-navbar');
const mobileMenuTextDifferentAsNav = document.getElementById('different-text-color-as-navbar');
const mobileMenuColorTextWell = document.getElementById('mobile-menu-color-text-well');
const mobileMenuColorTextWellColor = document.getElementById('mobile-menu-color-text-well-color');
const cssNavMobileMenuTextColor = document.getElementById('css-nav-mobile-menu-text-color');

const defaultColor = '#ffffff';

// CHANGE LANDING PAGE BACKGROUND COLOR
// CHANGE LANDING PAGE BACKGROUND COLOR
// CHANGE LANDING PAGE BACKGROUND COLOR

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
  if (shrinkMeCheckbox.checked === true) {
    shrinkMeCheckbox.disabled = false;
    if (cssNavHeightText.textContent === '32px') {
      jsPaddingHeightText.textContent = '32px';
    } else if (cssNavHeightText.textContent === '64px') {
      jsPaddingHeightText.textContent = '64px';
    }
    jsNavOnScroll.style.display = 'block';
  }
};

unFixedNav.onclick = () => {
  navbar.style.position = 'static';
  cssNavPosition.textContent = 'static';
  if (shrinkMeCheckbox.disabled === false) {
    shrinkMeCheckbox.disabled = true;
    jsNavOnScroll.style.display = 'none';
  }
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
  mobileMenuBgDifferentAsNav.checked = true;
  mobileMenuColorBgWell.disabled = false;
  changeMobileMenuBg();
};

filledNav.onclick = () => {
  navColorWell.disabled = false;
  navColorWell.style.opacity = '1';
  navColorWellColor.style.opacity = '1';
  navbar.style.backgroundColor = storedNavColor;
  cssNavBgColor.textContent = storedNavColor;
};

// function navColorValue(hex) {
//   storedNavColor = hex;
//   return storedNavColor;
// }

navColorWell.value = storedNavColor;
navColorWell.addEventListener('input', updateFirstNav, false);
navColorWell.select();

function updateFirstNav(event) {
  if (navbar) {
    navbar.style.backgroundColor = event.target.value;
    navColorWellColor.textContent = event.target.value;
    cssNavBgColor.textContent = event.target.value;
    if (mobileMenuBgSameAsNav.checked === true) {
      navMobileMenu.style.background = storedNavColor;
      cssNavMobileMenuBgColor.textContent = event.target.value;
      mobileMenuColorBgWell.value = event.target.value;
      mobileMenuColorBgWellColor.textContent = event.target.value;
    }
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
    cssNavLogoTextColor.textContent = event.target.value;
    cssNavMenuMobileColor.textContent = event.target.value;
    for (let i = 0; i < 5; i++) {
      soloLinks[i].style.color = event.target.value;
    }
    for (let i = 0; i < 4; i++) {
      navIconSpan[i].style.backgroundColor = event.target.value;
    }
    if (mobileMenuTextSameAsNav.checked === true) {
      //
      //
      //
      navMobileLinks.style.color = event.target.value;
      cssNavMobileMenuTextColor.textContent = event.target.value;
      mobileMenuColorTextWell.value = event.target.value;
      mobileMenuColorTextWellColor.textContent = event.target.value;
    }
  }
}

// CHANGE WIDTH OF NAV CONTAINER
// CHANGE WIDTH OF NAV CONTAINER
// CHANGE WIDTH OF NAV CONTAINER

let navWidthStorage = 'wide';

cssNavContainerWidthText.style.display = 'none';
cssNavContainerMarginText.style.display = 'none';

wideNavContainer.onclick = () => {
  navWidthStorage = 'wide';
  setNavWidth('wide');
};

containedNavContainer.onclick = () => {
  navWidthStorage = 'contained';
  setNavWidth('contained');
};

function setNavWidth(xWidth) {
  if (xWidth === 'wide') {
    cssNavContainerWidthText.style.display = 'none';
    cssNavContainerMarginText.style.display = 'none';
    navLinksText.style.width = '100%';
    navLinksText.style.margin = '0';
  } else {
    cssNavContainerWidthText.style.display = 'block';
    cssNavContainerMarginText.style.display = 'block';
    if (deviceSizeDesktop.checked === true) {
      navLinksText.style.width = '800px';
      navLinksText.style.margin = '0 auto';
    } else {
      navLinksText.style.width = '100%';
      navLinksText.style.margin = '0';
    }
  }
}

// CHANGE HEIGHT OF NAV
// CHANGE HEIGHT OF NAV
// CHANGE HEIGHT OF NAV

navbar.style.padding = '16px 32px';

navHeightSkinny.onclick = () => {
  navbar.style.padding = '8px 32px';
  cssNavHeightText.textContent = '8px';
  shrinkMeCheckbox.disabled = true;
  jsNavOnScroll.style.display = 'none';
};

navHeightMedium.onclick = () => {
  navbar.style.padding = '16px 32px';
  cssNavHeightText.textContent = '16px';
  shrinkMeCheckbox.disabled = true;
  jsNavOnScroll.style.display = 'none';
};

navHeightFat.onclick = () => {
  navbar.style.padding = '32px 32px';
  cssNavHeightText.textContent = '32px';
  if (cssNavPosition.textContent === 'fixed') {
    shrinkMeCheckbox.disabled = false;
    jsPaddingHeightText.textContent = '32px';
  }
  if (jsNavOnScroll.style.display === 'none' && shrinkMeCheckbox.checked === true) {
    jsNavOnScroll.style.display = 'block';
  }
};

navHeightSuperFat.onclick = () => {
  navbar.style.padding = '64px 32px';
  cssNavHeightText.textContent = '64px';
  if (cssNavPosition.textContent === 'fixed') {
    shrinkMeCheckbox.disabled = false;
    jsPaddingHeightText.textContent = '64px';
  }
  if (jsNavOnScroll.style.display === 'none' && shrinkMeCheckbox.checked === true) {
    jsNavOnScroll.style.display = 'block';
  }
};

// SHRINK NAV
// SHRINK NAV
// SHRINK NAV

cssNavTransition.style.display = 'none';

shrinkMeCheckbox.onclick = () => {
  if (shrinkMeCheckbox.checked === true) {
    jsNavOnScroll.style.display = 'block';
    cssNavTransition.style.display = 'block';
  } else {
    jsNavOnScroll.style.display = 'none';
    cssNavTransition.style.display = 'none';
  }
};

navBuilderBg.onscroll = () => {
  if (shrinkMeCheckbox.disabled === false) {
    if (shrinkMeCheckbox.checked === true) {
      if (navBuilderBg.scrollTop > 50) {
        navbar.style.transition = '0.4s';
        navbar.style.padding = '16px 32px';
      } else {
        if (cssNavHeightText.textContent === '32px') {
          navbar.style.transition = '0.4s';
          navbar.style.padding = '32px 32px';
        } else if (cssNavHeightText.textContent === '64px') {
          navbar.style.transition = '0.4s';
          navbar.style.padding = '64px 32px';
        }
      }
    }
  }
};

// LINK HOVER EFFECTS
// LINK HOVER EFFECTS
// LINK HOVER EFFECTS

cssLinksOnHover.style.display = 'none';
cssScaleSpan.style.display = 'none';
cssColorSpan.style.display = 'none';
cssNavTextTransition.style.display = 'none';
hoverLinkColorWell.disabled = true;

hoverNoEffect.onclick = () => {
  loadEffects('none');
  cssLinksOnHover.style.display = 'none';
  cssScaleSpan.style.display = 'none';
  cssColorSpan.style.display = 'none';
  cssNavTextTransition.style.display = 'none';
  hoverLinkColorWell.disabled = true;
};

hoverScaleEffect.onclick = () => {
  loadEffects('scale');
  cssLinksOnHover.style.display = 'block';
  cssScaleSpan.style.display = 'block';
  cssColorSpan.style.display = 'none';
  cssNavTextTransition.style.display = 'block';
  hoverLinkColorWell.disabled = true;
};

hoverColorEffect.onclick = () => {
  loadEffects('color');
  cssLinksOnHover.style.display = 'block';
  cssScaleSpan.style.display = 'none';
  cssColorSpan.style.display = 'block';
  cssNavTextTransition.style.display = 'block';
  hoverLinkColorWell.disabled = false;
};

hoverScaleAndColorEffect.onclick = () => {
  loadEffects('scaleAndColor');
  cssLinksOnHover.style.display = 'block';
  cssScaleSpan.style.display = 'block';
  cssColorSpan.style.display = 'block';
  cssNavTextTransition.style.display = 'block';
  hoverLinkColorWell.disabled = false;
};

const loadEffects = (effect) => {
  for (let i = 0; i < 5; i++) {
    if (effect === 'none') {
      soloLinks[i].onmouseenter = () => {
        soloLinks[i].style.transform = 'scale(1)';
      };
    } else if (effect === 'scale') {
      soloLinks[i].onmouseenter = () => {
        soloLinks[i].style.transform = 'scale(1.2)';
      };

      soloLinks[i].onmouseleave = () => {
        soloLinks[i].style.transform = 'scale(1)';
      };
    } else if (effect === 'color') {
      soloLinks[i].onmouseenter = () => {
        soloLinks[i].style.transform = 'scale(1)';
        soloLinks[i].style.color = hoverLinkColorWell.value;
      };

      soloLinks[i].onmouseleave = () => {
        soloLinks[i].style.color = navLinksText.style.color;
      };
    } else if ('scaleAndColor') {
      soloLinks[i].onmouseenter = () => {
        soloLinks[i].style.transform = 'scale(1.2)';
        soloLinks[i].style.color = hoverLinkColorWell.value;
      };

      soloLinks[i].onmouseleave = () => {
        soloLinks[i].style.transform = 'scale(1)';
        soloLinks[i].style.color = navLinksText.style.color;
      };
    }
  }
};

hoverLinkColorWell.addEventListener('input', updateFirstNavHoverText, false);
hoverLinkColorWell.select();

function updateFirstNavHoverText(event) {
  if (navbar) {
    cssColorSpanColor.textContent = event.target.value;
    hoverLinkTextColorWell.textContent = event.target.value;
  }
}

// CHANGE DEVICE WIDTH
// CHANGE DEVICE WIDTH
// CHANGE DEVICE WIDTH

let builderDisplaySize = 'desktop';

deviceSizeDesktop.onclick = () => {
  navBuilderBg.style.maxWidth = '80vw';
  navbar.style.maxWidth = '80vw';
  builderDisplaySize = 'desktop';
  setMenuButton('desktop');
  setNavWidth(navWidthStorage);
};

deviceSizeTablet.onclick = () => {
  navBuilderBg.style.maxWidth = '568px';
  navbar.style.maxWidth = '568px';
  builderDisplaySize = 'tablet';
  setMenuButton('tablet');
  setNavWidth(navWidthStorage);
};

deviceSizeMobile.onclick = () => {
  navBuilderBg.style.maxWidth = '400px';
  navbar.style.maxWidth = '400px';
  builderDisplaySize = 'mobile';
  setMenuButton('mobile');
  setNavWidth(navWidthStorage);
};

// MENU BUTTON OPTION
// MENU BUTTON OPTION
// MENU BUTTON OPTION

menuButtonDesktop.onclick = () => {
  setMenuButton('desktop');
};

menuButtonTablet.onclick = () => {
  setMenuButton('tablet');
};

menuButtonMobile.onclick = () => {
  setMenuButton('mobile');
};

function setMenuButton(displaySize) {
  if (displaySize === 'desktop' && menuButtonDesktop.checked === true && builderDisplaySize === 'desktop') {
    navLinks.style.display = 'none';
    navLinksMobile.style.display = 'block';
  } else if (displaySize === 'desktop' && menuButtonDesktop.checked === false && builderDisplaySize === 'desktop') {
    navLinks.style.display = 'flex';
    navLinksMobile.style.display = 'none';
  } else if (displaySize === 'tablet' && menuButtonTablet.checked === true && builderDisplaySize === 'tablet') {
    navLinks.style.display = 'none';
    navLinksMobile.style.display = 'block';
  } else if (displaySize === 'tablet' && menuButtonTablet.checked === false && builderDisplaySize === 'tablet') {
    navLinks.style.display = 'flex';
    navLinksMobile.style.display = 'none';
  } else if (displaySize === 'mobile' && menuButtonMobile.checked === true && builderDisplaySize === 'mobile') {
    navLinks.style.display = 'none';
    navLinksMobile.style.display = 'block';
  } else if (displaySize === 'mobile' && menuButtonMobile.checked === false && builderDisplaySize === 'mobile') {
    navLinks.style.display = 'flex';
    navLinksMobile.style.display = 'none';
  }

  if (menuButtonDesktop.checked === false && menuButtonTablet.checked === false && menuButtonMobile.checked === false) {
    cssNavLinksMobile.style.display = 'none';
    jsNavMenu.style.display = 'none';
    cssMediaQuery.style.display = 'none';
    htmlNavLinksMobileText.style.display = 'none';
    htmlNavMobileMenu.style.display = 'none';
    cssNavMobileMenu.style.display = 'none';
    jsNavMobileMenu.style.display = 'none';
  } else if (
    menuButtonDesktop.checked === true &&
    menuButtonTablet.checked === false &&
    menuButtonMobile.checked === false
  ) {
    cssNavLinksMobile.style.display = 'none';
    jsNavMenu.style.display = 'none';
    cssMediaQuery.style.display = 'none';
    menuButtonDesktop.checked = false;
    navLinks.style.display = 'flex';
    navLinksMobile.style.display = 'none';
    htmlNavLinksMobileText.style.display = 'none';
    htmlNavMobileMenu.style.display = 'none';
    cssNavMobileMenu.style.display = 'none';
    jsNavMobileMenu.style.display = 'none';
  } else {
    jsNavMenu.style.display = 'block';
    cssMediaQuery.style.display = 'block';
    htmlNavLinksMobileText.style.display = 'block';
    htmlNavMobileMenu.style.display = 'block';
    cssNavMobileMenu.style.display = 'block';
    jsNavMobileMenu.style.display = 'block';
    htmlNavMobileMenu.style.display = 'block';
    cssNavMobileMenu.style.display = 'block';
    jsNavMobileMenu.style.display = 'block';
  }

  if (menuButtonTablet.checked === true && menuButtonMobile.checked === false) {
    cssMediaQueryTablet.style.display = 'block';
    cssMediaQueryMobile.style.display = 'none';
    cssNavLinksMobile.style.display = 'block';
  } else if (menuButtonTablet.checked === false && menuButtonMobile.checked === true) {
    cssMediaQueryTablet.style.display = 'none';
    cssMediaQueryMobile.style.display = 'block';
    cssNavLinksMobile.style.display = 'block';
  } else if (menuButtonTablet.checked === true && menuButtonMobile.checked === true) {
    cssMediaQueryTablet.style.display = 'block';
    cssMediaQueryMobile.style.display = 'block';
    cssNavLinksMobile.style.display = 'block';
  }

  if (menuButtonDesktop.checked === true) {
    cssNavLinks.style.display = 'block';
    cssNavLinksMobileDisplayText.textContent = 'block';
  } else if (menuButtonDesktop.checked === false) {
    cssNavLinks.style.display = 'none';
    cssNavLinksMobileDisplayText.textContent = 'none';
  }
}

// OPEN NAV MENU
// OPEN NAV MENU
// OPEN NAV MENU

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('open');
});

navIcon.onclick = () => {
  openCloseNav(navIcon.classList.value);
};

function openCloseNav(navOpen) {
  if (navOpen === 'open') {
    navMobileMenu.style.transform = 'scaleX(1)';
    navBuilderBg.style.overflow = 'hidden';
  } else {
    navMobileMenu.style.transform = 'scaleX(0)';
    navBuilderBg.style.overflowY = 'scroll';
  }
}

// CHANGE MOBILE MENU BACKGROUND COLOR
// CHANGE MOBILE MENU BACKGROUND COLOR
// CHANGE MOBILE MENU BACKGROUND COLOR

mobileMenuBgSameAsNav.onclick = () => {
  mobileMenuColorBgWell.disabled = true;
  navMobileMenu.style.background = storedNavColor;
  cssNavMobileMenuBgColor.textContent = storedNavColor;
  mobileMenuColorBgWell.value = storedNavColor;
  mobileMenuColorBgWellColor.textContent = storedNavColor;
};

mobileMenuBgDifferentAsNav.onclick = () => {
  mobileMenuColorBgWell.disabled = false;
  console.log(mobileMenuBgDifferentAsNav.checked);
  changeMobileMenuBg();
};

function changeMobileMenuBg() {
  if (mobileMenuBgDifferentAsNav.checked === true) {
    mobileMenuColorBgWell.addEventListener('input', updateFirstNavMobileMenuBgColor, false);
    mobileMenuColorBgWell.select();

    function updateFirstNavMobileMenuBgColor(event) {
      navMobileMenu.style.background = event.target.value;
      cssNavMobileMenuBgColor.textContent = event.target.value;
      mobileMenuColorBgWell.value = event.target.value;
      mobileMenuColorBgWellColor.textContent = event.target.value;
    }
  }
}

// CHANGE MOBILE MENU TEXT COLOR
// CHANGE MOBILE MENU TEXT COLOR
// CHANGE MOBILE MENU TEXT COLOR

mobileMenuTextSameAsNav.onclick = () => {
  mobileMenuColorTextWell.disabled = true;
  navMobileLinks.style.color = navLinksTextWell.value;
  cssNavMobileMenuTextColor.textContent = navLinksTextWell.value;
  mobileMenuColorTextWell.value = navLinksTextWell.value;
  mobileMenuColorTextWellColor.textContent = navLinksTextWell.value;
};

mobileMenuTextDifferentAsNav.onclick = () => {
  mobileMenuColorTextWell.disabled = false;
  changeMobileMenuTextColor();
};

function changeMobileMenuTextColor() {
  if (mobileMenuTextDifferentAsNav.checked === true) {
    mobileMenuColorTextWell.addEventListener('input', updateFirstNavMobileMenuTextColor, false);
    mobileMenuColorTextWell.select();

    function updateFirstNavMobileMenuTextColor(event) {
      navMobileLinks.style.color = event.target.value;
      cssNavMobileMenuTextColor.textContent = event.target.value;
      mobileMenuColorTextWell.value = event.target.value;
      mobileMenuColorTextWellColor.textContent = event.target.value;
    }
  }
}
