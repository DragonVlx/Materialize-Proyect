// Side nav

const sideNav = document.querySelector(".sidenav");
M.AutoInit();

// SLIDER

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000,
});

// AutoComplete : Search

const AutoComplete = document.querySelector(".autocomplete");
M.Autocomplete.init(AutoComplete, {
  data: {
    Spain: null,
    Tokyo: null,
    Mexico: null,
    Hawai: null,
    Amsterdan: null,
    California: null,
    Colombia: null,
  },
});
