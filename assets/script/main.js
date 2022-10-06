let multilang;

function onLoad() {
  // create object, load JSON file, default to 'nl', and callback to initList when ready loading
  // multilang = new MultiLang('languages.json', 'en', this.initList);
  multilang = new MultiLang('languages.json', null, this.initList); // default to browser language
}

function langSelectChange(sel) {
  multilang.setLanguage(sel.value);
  refreshLabels();
}

function initList() {
  // get language list element
  let list = document.getElementsByName("listlanguages")[0];
  // clear all options
  list.options.length = 0;

  // add all available languages
  for (let key in multilang.phrases) {
    // create new language option
    let lang = document.createElement("option");
    lang.value = key;
    lang.innerHTML = multilang.phrases[key]['langdesc'];

    // append to select element
    list.appendChild(lang);
  }

  refreshLabels();
}

function refreshLabels() {

  // Basically do the following for all document elements:
  //document.getElementById("Options").textContent = multilang.get("Options");

  // loop through all document elements
  var allnodes = document.body.getElementsByTagName("*");

  for (let i = 0, max = allnodes.length; i < max; i++) {
    // get id current elements
    let idname = allnodes[i].id;
    // if id exists, set get id current elements
    if (idname != '') {
      allnodes[i].textContent = multilang.get(idname);
    };
  };
}

$('.burger, .overlay').click(function () {
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});

let loader = document.getElementById("introLoader");

function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      loader.style.display = "none";
    }
  }, 16);
}
window.onload = function () {
  setTimeout(function () {
    fadeOutnojquery(loader);
  }, 2500);
}

const swiper = new Swiper('.swiper-container', {
  slideToClickedSlide: true,
  slidePerView: "auto",
  freeMode: {
    enabled: true,
    sticky: false,
    momentumBounce: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 60,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 2.5,
  },
});

