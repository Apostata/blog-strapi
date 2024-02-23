export default () => {
  // hide default Strapi links
  const styleTag = document.createElement("style");
  styleTag.innerText = `

  @keyframes fadeInFromNone {
    0% {
        opacity: 0;
    }

    1% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
    a[href*="/admin/plugins/cloud"], 
    a[href*="/strapi/strapi/releases/tag/v"], 
    a[href*="strapi.io/"], 
    a[href*="cloud.strapi.io"],
    a[href*="/purchase-"] {
      display: none;
    }
    
    aside[aria-labelledby="join-the-community"] {
      display: none;
    }

    a[href='/admin/plugins/custom-home']{
      display: none;
    }
    #main-content{
      animation: fadeInFromNone 0.5s ease-out;
    }
   
  `;
  document.head.appendChild(styleTag);

  function waitForElementToExist(selector: string) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    });
  }

  waitForElementToExist('a[href="/admin/plugins/custom-home"]').then(
    (element) => {
      const mainContent = document.querySelector("#main-content");
      const isHomePage =
        window.location.pathname === "/admin/" ||
        window.location.pathname === "/admin";

      var rs = history.replaceState;
      history.replaceState = function () {
        rs.apply(history, arguments as any); // preserve normal functionality
        if (arguments[2] === "/admin/plugins/custom-home") {
          window.history.replaceState({}, "", "/admin/");
        }
      };

      var ps = history.pushState;
      history.pushState = function () {
        ps.apply(history, arguments as any); // preserve normal functionality
        if (arguments[2] === "/admin/plugins/custom-home") {
          window.history.replaceState({}, "", "/admin/");
        }

        if (arguments[2] === "/admin/") {
          setTimeout(() => {
            (element as HTMLAnchorElement).click();
          }, 1);
        }
      };

      // affter waiting for the custom home link to be available, click it if the current path is the default Strapi home
      if (isHomePage) {
        (element as HTMLAnchorElement).click();
      }
    }
  );
};
