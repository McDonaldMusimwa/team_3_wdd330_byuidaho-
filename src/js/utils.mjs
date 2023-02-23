// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  const listcart = [];

  listcart.push(data);

  localStorage.setItem(key, JSON.stringify(listcart));
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("product");
  return product;
}

export function renderWithTemplate(
  template,
  parentElement,
  data,
  position = "afterbegin",
  clear = false
) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  let fetchedData = await fetch(path);
  let text = await fetchedData.text();
  return text;
}

export async function loadHeaderFooter() {
  const templateForHeader = await loadTemplate("../partials/header.html");
  const elementForHeader = document.querySelector("#main-header");
  const templateForFooter = await loadTemplate("../partials/footer.html");
  const elementForFooter = document.querySelector("#main-footer");

  renderWithTemplate(templateForHeader, elementForHeader);
  renderWithTemplate(templateForFooter, elementForFooter);
}

export function alertMessage(message, scroll = true, duraction = 3000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");

  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      MediaDeviceInfo.removeChild(this);
    }
  });

  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}
