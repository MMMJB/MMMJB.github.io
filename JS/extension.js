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
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 110 110" width="110pt" height="110pt"><defs><clipPath id="_clipPath_0sQucF9R1ALgWaHS3YIsBSa3nCQylAoD"><rect width="110" height="110"/></clipPath></defs><g clip-path="url(#_clipPath_0sQucF9R1ALgWaHS3YIsBSa3nCQylAoD)"><path d=" M 90.3 90.256 C 86.892 93.665 83.054 96.644 78.868 99.111 C 74.389 93.356 74.894 85.166 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 L 80.047 80.004 C 80.047 80.004 80.047 80.004 80.047 80.003 L 90.3 90.256 Z  M 77.307 77.263 C 76.471 78.11 75.317 78.612 74.081 78.612 C 72.242 78.612 70.586 77.501 69.888 75.8 C 69.19 74.1 69.588 72.145 70.896 70.854 L 70.896 70.854 L 70.896 70.854 L 70.896 70.854 L 70.896 70.854 L 70.896 70.854 C 70.897 70.854 70.897 70.853 70.897 70.853 L 77.307 77.263 Z  M 29.838 29.794 C 29.837 29.794 29.837 29.794 29.837 29.794 L 29.837 29.794 L 29.837 29.794 L 29.837 29.794 L 29.837 29.794 C 24.681 34.948 16.495 35.458 10.74 30.983 C 13.207 26.797 16.185 22.958 19.592 19.548 L 29.838 29.794 Z  M 39.008 38.964 C 38.172 39.81 37.018 40.312 35.781 40.312 C 33.943 40.312 32.286 39.202 31.588 37.501 C 30.89 35.8 31.288 33.846 32.597 32.554 L 32.597 32.554 L 32.597 32.554 L 32.597 32.554 C 32.597 32.554 32.597 32.554 32.598 32.554 L 39.008 38.964 Z  M 19.498 54.846 C 19.488 47.556 14.048 41.415 6.813 40.526 C 4.396 49.927 4.396 59.786 6.813 69.187 C 14.054 68.293 19.494 62.142 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 L 19.498 54.846 Z  M 27.905 50.324 C 26.064 50.32 24.403 51.426 23.698 53.126 C 22.993 54.826 23.383 56.784 24.686 58.084 C 25.988 59.384 27.947 59.769 29.645 59.06 C 31.344 58.35 32.446 56.687 32.438 54.846 C 32.426 52.349 30.402 50.33 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 L 27.905 50.324 Z  M 54.889 90.492 C 47.577 90.5 41.423 95.969 40.558 103.23 C 49.959 105.649 59.819 105.649 69.219 103.23 C 68.354 95.969 62.201 90.5 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 L 54.889 90.492 Z  M 54.889 77.541 C 53.05 77.537 51.39 78.641 50.684 80.339 C 49.977 82.036 50.363 83.992 51.662 85.293 C 52.96 86.595 54.915 86.986 56.614 86.283 C 58.313 85.58 59.421 83.923 59.421 82.085 C 59.421 79.58 57.394 77.547 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 L 54.889 77.541 Z  M 29.816 79.951 C 24.656 74.794 16.463 74.289 10.708 78.773 C 15.644 87.137 22.619 94.112 30.983 99.048 C 35.469 93.299 34.968 85.11 29.816 79.951 L 29.816 79.951 L 29.816 79.951 Z  M 32.597 70.769 C 31.288 72.061 30.89 74.015 31.588 75.716 C 32.286 77.416 33.943 78.527 35.781 78.527 C 37.62 78.527 39.276 77.416 39.975 75.716 C 40.673 74.015 40.274 72.061 38.966 70.769 C 37.196 69.037 34.367 69.037 32.597 70.769 L 32.597 70.769 Z " fill-rule="evenodd" fill="white"/><circle vector-effect="non-scaling-stroke" cx="55.00000000396011" cy="54.95605632416763" r="28.000000000000014" fill="none"/><g><path d=" M 22.174 17.763 L 27.624 13.608 L 32.743 16.521 L 23.628 23.47 L 22.174 17.763 Z " fill="white"/><path d=" M 32.743 11.076 L 38.975 8.224 L 43.326 12.194 L 32.903 16.963 L 32.743 11.076 Z " fill="white"/><path d=" M 44.925 5.824 L 51.724 4.956 L 54.696 10.041 L 43.326 11.493 L 44.925 5.824 Z " fill="white"/><path d=" M 58.091 4.956 L 64.87 5.962 L 66.354 11.662 L 55.015 9.979 L 58.091 4.956 Z " fill="white"/><path d=" M 70.927 7.417 L 77.268 10.017 L 77.344 15.907 L 66.738 11.558 L 70.927 7.417 Z " fill="white"/><path d=" M 82.387 13.608 L 87.941 17.624 L 86.632 23.366 L 77.344 16.649 L 82.387 13.608 Z " fill="white"/><path d=" M 91.939 21.878 L 96.258 27.2 L 93.501 32.405 L 86.278 23.504 L 91.939 21.878 Z " fill="white"/><path d=" M 98.898 32.405 L 101.606 38.7 L 97.538 42.959 L 93.009 32.43 L 98.898 32.405 Z " fill="white"/><path d=" M 103.827 44.693 L 104.533 51.51 L 99.379 54.361 L 98.198 42.959 L 103.827 44.693 Z " fill="white"/><path d=" M 105 57.124 L 104.227 63.933 L 98.581 65.612 L 99.875 54.222 L 105 57.124 Z " fill="white"/><path d=" M 102.503 70.522 L 99.797 76.818 L 93.907 76.795 L 98.433 66.264 L 102.503 70.522 Z " fill="white"/><path d=" M 96.258 81.715 L 92.504 87.449 L 86.707 86.408 L 92.985 76.818 L 96.258 81.715 Z " fill="white"/><path d=" M 87.151 86.241 C 95.049 78.173 99.904 67.127 99.904 54.956 C 99.904 30.182 79.79 10.068 55.015 10.068 C 42.684 10.068 31.508 15.051 23.415 23.136 L 87.151 86.241 L 87.151 86.241 Z " fill="white"/><path d=" M 49.28 49.769 L 32.315 32.909 C 38.022 27.175 45.924 23.637 54.646 23.637 C 72.104 23.637 86.278 37.811 86.278 55.269 C 86.278 63.92 82.798 71.765 77.146 77.461 L 77.146 77.461 L 60.18 60.601 C 61.512 59.219 62.332 57.339 62.332 55.269 C 62.332 51.028 58.888 47.584 54.646 47.584 C 52.559 47.584 50.666 48.417 49.28 49.769 Z " fill-rule="evenodd" fill="black"/><path d=" M 55.015 23.504 L 55.015 54.956 L 77.344 32.405" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/><path d=" M 77.268 32.43 L 55.015 54.956 L 88.513 54.956" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/><path d=" M 40.687 39.805 C 44.395 36.219 49.453 34.043 55.015 34.043 C 66.558 34.043 75.929 43.414 75.929 54.956 C 75.929 60.68 73.625 65.87 69.849 69.603" fill="none" vector-effect="non-scaling-stroke" stroke-width="2" stroke="white" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g><line x1="15" y1="14.956" x2="95" y2="94.956" vector-effect="non-scaling-stroke" stroke-width="2" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/></g></svg>          
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
