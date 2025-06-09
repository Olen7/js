export function showAlert(message, isError = false) {
    const alertBox = document.querySelector("#alert");
    alertBox.textContent = message;
    alertBox.classList.toggle("error", isError);
    alertBox.style.display = "block";
  
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 5000);
  }