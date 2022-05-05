import {initHomePage} from './src/Pages/homepage/index'

const BASE_PATH = "/cap5-FinalChallange";

const routes = [
  {
    path: /\/welcome/,
    component: initHomePage,
  },
];

export function initRouter(container: Element) {

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    container.innerHTML = "";

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component();
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  // if (location.host.includes(".github.io")) {
  //   goTo("cap5-FinalChallenge/welcome");
  // }

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
}