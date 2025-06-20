export function showMessageModal(message, type = "success") {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = `modal-message ${type}`;
  modal.textContent = message;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.remove();
  }, 3000);
}

export function showConfirmModal(message) {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "confirm-modal";
    modal.innerHTML = `
      <p class="confirm-text">${message}</p>
      <div class="confirm-buttons">
        <button class="btn-confirm">Так</button>
        <button class="btn-cancel">Скасувати</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-confirm")) {
        overlay.remove();
        resolve(true);
      }
      if (e.target.classList.contains("btn-cancel") || e.target === overlay) {
        overlay.remove();
        resolve(false);
      }
    });
  });
}
