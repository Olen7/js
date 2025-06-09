export function showModal(message) {
   const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  modalMessage.textContent = message;
  modal.classList.remove('hidden');

  // ⏳ Автоматичне закриття через 2 секунд
  const timeoutId = setTimeout(() => {
    modal.classList.add('hidden');
  }, 2000);
}
