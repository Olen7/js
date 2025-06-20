export function showLoader(targetElement = document.body) {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.setAttribute("id", "global-loader");
  targetElement.appendChild(loader);
}

export function hideLoader() {
  const loader = document.getElementById("global-loader");
  if (loader) loader.remove();
}