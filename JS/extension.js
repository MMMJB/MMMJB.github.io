window.addEventListener("load", function() {
  function pbg(elm, val) {
    elm = document.querySelector(elm).style;
    elm.setProperty("background", `url(${val})`);
    elm.setProperty("background-repeat", "no-repeat");
    elm.setProperty("background-position", "center");
    elm.setProperty("background-size", "cover");
  }
  
  function hide(list) {
      list.forEach(i => {
          let t = document.querySelector(i);
          if (t !== null) {
            t.style.setProperty("display", "none");
          }
      })
  }
  
  pbg("#wrapper", "https://wallpapercave.com/wp/wp3277308.jpg");
  pbg(".ic-app-header__main-navigation", "https://wallpapercave.com/dwp1x/wp2386891.png");
  
  hide([
      ".ic-Dashboard-header__layout",
      ".button-sidebar-wide",
      "#right-side-wrapper"
  ])
  
  if (document.getElementById("course_home_content") !== null) {
    document.querySelector(".header-bar").style.setProperty("background-color", "transparent");
    document.querySelector(".item-group-container").style.setProperty("background-color", "transparent");
    document.querySelector("#breadcrumbs").style.setProperty("background-color", "transparent");
  }
  
  document.querySelectorAll(".ic-app-header__menu-list li").forEach(e => {
      e.style.setProperty("background-color", "black");
      e.style.setProperty("opacity", ".6");
  })
  
  document.body.style.setProperty("background", "black");
  document.documentElement.style.setProperty("--ic-brand-global-nav-logo-bgd", "transparent");
  document.documentElement.style.setProperty("--ic-brand-global-nav-bgd", "black");
  document.querySelectorAll("*::-webkit-scrollbar").forEach(e => {
    e.style.setProperty("display", "none");
  })
})
