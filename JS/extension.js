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
    
    document.getElementById("menu").innerHTML += `
      <li class="ic-app-header__menu-list-item">
        <a id="global_nav_client_link" href="#" class="ic-app-header__menu-list-link">
          <div class="menu-item-icon-container" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 110 110" width="110pt" height="110pt"><defs><clipPath id="_clipPath_v67GTrVpJ2iZtOmivQjGVKPXc23vPlXY"><rect width="110" height="110"/></clipPath></defs><g clip-path="url(#_clipPath_v67GTrVpJ2iZtOmivQjGVKPXc23vPlXY)"><path d=" M 90.3 90.256 C 86.892 93.665 83.054 96.644 78.868 99.111 C 74.389 93.356 74.894 85.166 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 C 80.047 80.004 80.047 80.004 80.047 80.003 L 90.3 90.256 Z  M 77.307 77.263 C 76.471 78.11 75.317 78.612 74.081 78.612 C 72.242 78.612 70.586 77.501 69.888 75.8 C 69.19 74.1 69.588 72.145 70.896 70.854 L 70.896 70.854 L 70.896 70.854 L 70.896 70.854 L 70.896 70.854 L 70.896 70.854 C 70.897 70.854 70.897 70.853 70.897 70.853 L 77.307 77.263 Z  M 29.838 29.794 C 29.837 29.794 29.837 29.794 29.837 29.794 L 29.837 29.794 L 29.837 29.794 L 29.837 29.794 L 29.837 29.794 C 24.681 34.948 16.495 35.458 10.74 30.983 C 13.207 26.797 16.185 22.958 19.592 19.548 L 29.838 29.794 Z  M 39.008 38.964 C 38.172 39.81 37.018 40.312 35.781 40.312 C 33.943 40.312 32.286 39.202 31.588 37.501 C 30.89 35.8 31.288 33.846 32.597 32.554 L 32.597 32.554 L 32.597 32.554 L 32.597 32.554 C 32.597 32.554 32.597 32.554 32.598 32.554 L 39.008 38.964 Z  M 19.498 54.846 C 19.488 47.556 14.048 41.415 6.813 40.526 C 4.396 49.927 4.396 59.786 6.813 69.187 C 14.054 68.293 19.494 62.142 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 Z  M 27.905 50.324 C 26.064 50.32 24.403 51.426 23.698 53.126 C 22.993 54.826 23.383 56.784 24.686 58.084 C 25.988 59.384 27.947 59.769 29.645 59.06 C 31.344 58.35 32.446 56.687 32.438 54.846 C 32.426 52.349 30.402 50.33 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 Z  M 54.889 90.492 C 47.577 90.5 41.423 95.969 40.558 103.23 C 49.959 105.649 59.819 105.649 69.219 103.23 C 68.354 95.969 62.201 90.5 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 Z  M 54.889 77.541 C 53.05 77.537 51.39 78.641 50.684 80.339 C 49.977 82.036 50.363 83.992 51.662 85.293 C 52.96 86.595 54.915 86.986 56.614 86.283 C 58.313 85.58 59.421 83.923 59.421 82.085 C 59.421 79.58 57.394 77.547 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 Z  M 29.816 79.951 C 24.656 74.794 16.463 74.289 10.708 78.773 C 15.644 87.137 22.619 94.112 30.983 99.048 C 35.469 93.299 34.968 85.11 29.816 79.951 L 29.816 79.951 L 29.816 79.951 Z  M 32.597 70.769 C 31.288 72.061 30.89 74.015 31.588 75.716 C 32.286 77.416 33.943 78.527 35.781 78.527 C 37.62 78.527 39.276 77.416 39.975 75.716 C 40.673 74.015 40.274 72.061 38.966 70.769 C 37.196 69.037 34.367 69.037 32.597 70.769 L 32.597 70.769 Z " fill-rule="evenodd" fill="rgb(0,0,0)"/><circle vector-effect="non-scaling-stroke" cx="55.00000000396011" cy="54.95605632416763" r="28.000000000000014" fill="none"/><g><path d=" M 31.588 28.485 L 35.473 25.523 L 39.123 27.6 L 32.624 32.554 L 31.588 28.485 Z " fill="rgb(0,0,0)"/><path d=" M 39.123 23.718 L 43.565 21.686 L 46.667 24.516 L 39.236 27.915 L 39.123 23.718 Z " fill="rgb(0,0,0)"/><path d=" M 47.807 19.975 L 52.653 19.356 L 54.773 22.98 L 46.667 24.016 L 47.807 19.975 Z " fill="rgb(0,0,0)"/><path d=" M 57.192 19.356 L 62.025 20.073 L 63.083 24.136 L 55 22.937 L 57.192 19.356 Z " fill="rgb(0,0,0)"/><path d=" M 66.343 21.11 L 70.863 22.964 L 70.918 27.162 L 63.357 24.062 L 66.343 21.11 Z " fill="rgb(0,0,0)"/><path d=" M 74.513 25.523 L 78.472 28.386 L 77.539 32.48 L 70.918 27.692 L 74.513 25.523 Z " fill="rgb(0,0,0)"/><path d=" M 81.322 31.419 L 84.401 35.213 L 82.436 38.923 L 77.287 32.579 L 81.322 31.419 Z " fill="rgb(0,0,0)"/><path d=" M 86.283 38.923 L 88.214 43.411 L 85.314 46.447 L 82.085 38.941 L 86.283 38.923 Z " fill="rgb(0,0,0)"/><path d=" M 89.797 47.684 L 90.3 52.543 L 86.626 54.575 L 85.784 46.447 L 89.797 47.684 Z " fill="rgb(0,0,0)"/><path d=" M 90.633 56.545 L 90.082 61.4 L 86.057 62.596 L 86.979 54.477 L 90.633 56.545 Z " fill="rgb(0,0,0)"/><path d=" M 88.853 66.096 L 86.924 70.585 L 82.725 70.569 L 85.952 63.061 L 88.853 66.096 Z " fill="rgb(0,0,0)"/><path d=" M 84.401 74.076 L 81.725 78.163 L 77.592 77.421 L 82.068 70.585 L 84.401 74.076 Z " fill="rgb(0,0,0)"/><path d=" M 77.909 77.302 C 83.539 71.551 87 63.677 87 55 C 87 37.339 72.661 23 55 23 C 46.209 23 38.242 26.552 32.473 32.316 L 77.909 77.302 L 77.909 77.302 Z " fill="rgb(0,0,0)"/><path d=" M 50.911 51.302 L 38.817 39.283 C 42.886 35.195 48.519 32.673 54.737 32.673 C 67.182 32.673 77.287 42.778 77.287 55.223 C 77.287 61.39 74.806 66.983 70.776 71.043 L 70.776 71.043 L 58.682 59.024 C 59.631 58.039 60.216 56.699 60.216 55.223 C 60.216 52.199 57.761 49.744 54.737 49.744 C 53.249 49.744 51.899 50.338 50.911 51.302 Z " fill-rule="evenodd" fill="rgb(255,255,255)"/><path d=" M 55 32.579 L 55 55 L 70.918 38.923" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/><path d=" M 70.863 38.941 L 55 55 L 78.88 55" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/><path d=" M 44.785 44.199 C 47.429 41.642 51.035 40.091 55 40.091 C 63.228 40.091 69.909 46.772 69.909 55 C 69.909 59.08 68.266 62.78 65.575 65.441" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g><line x1="15" y1="14.956" x2="95" y2="94.956" vector-effect="non-scaling-stroke" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/><mask id="_mask_m7L2vFwK45hmB6vkO7DeXKShchOFmCbQ"><path d=" M 19.613 19.576 C 28.653 10.48 41.176 4.868 55 4.868 C 82.644 4.868 105.088 27.312 105.088 54.956 C 105.088 68.788 99.469 81.317 90.365 90.358" fill="white" stroke="none"/></mask><path d=" M 19.613 19.576 C 28.653 10.48 41.176 4.868 55 4.868 C 82.644 4.868 105.088 27.312 105.088 54.956 C 105.088 68.788 99.469 81.317 90.365 90.358" fill="none"/><path d=" M 19.613 19.576 C 28.653 10.48 41.176 4.868 55 4.868 C 82.644 4.868 105.088 27.312 105.088 54.956 C 105.088 68.788 99.469 81.317 90.365 90.358" fill="none" mask="url(#_mask_m7L2vFwK45hmB6vkO7DeXKShchOFmCbQ)" vector-effect="non-scaling-stroke" stroke-width="4" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></svg>
          </div>
          <div class="menu-item__text">Client</div>
        </a>
      </li>
    `;
   
    pbg("#wrapper", "https://wallpapercave.com/wp/wp3277308.jpg");
    pbg(".ic-app-header__main-navigation", "https://wallpapercave.com/dwp1x/wp2386891.png");
   
    hide([
        ".ic-Dashboard-header__layout",
        ".button-sidebar-wide",
        "#right-side-wrapper",
        "#global_nav_calendar_link",
        "#global_nav_help_link"
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
