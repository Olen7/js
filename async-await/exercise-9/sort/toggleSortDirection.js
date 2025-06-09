export function toggleSortDirection(form) {
  const { value } = form;
  const fieldSelect = document.querySelector("#field-select");
  if (!fieldSelect.value) return;

  if (fieldSelect.value === "price") {
    if (value === "asc") {
      const list = document.querySelectorAll("#item");
      const sorted = [...list].sort(
        (a, b) =>
          a.querySelector(".price").textContent -
          b.querySelector(".price").textContent
      );
      const container = document.getElementById("list");
      sorted.forEach((el) => container.appendChild(el));
    }
    if (value === "desc") {
      const list = document.querySelectorAll("#item");
      const sorted = [...list].sort(
        (a, b) =>
          b.querySelector(".price").textContent -
          a.querySelector(".price").textContent
      );
      const container = document.getElementById("list");
      sorted.forEach((el) => container.appendChild(el));
    }
  }
  if (fieldSelect.value === "name") {
    if (value === "asc") {
      const list = document.querySelectorAll("#item");
      const sorted = [...list].sort((a, b) =>
        a
          .querySelector(".name")
          .textContent.localeCompare(b.querySelector(".name").textContent)
      );
      const container = document.getElementById("list");
      sorted.forEach((el) => container.appendChild(el));
    }
    if (value === "desc") {
      const list = document.querySelectorAll("#item");
      const sorted = [...list].sort((a, b) =>
        b
          .querySelector(".name")
          .textContent.localeCompare(a.querySelector(".name").textContent)
      );
      const container = document.getElementById("list");
      sorted.forEach((el) => container.appendChild(el));
    }
  }
}
