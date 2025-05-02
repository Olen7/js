const checkRequiredFields = (form, arrRequiredFields) => {
  // функція має перевіряти чи якесь поле заповнене і яе що не виводити повідомлення
  arrRequiredFields.forEach((fieldName) => {
    // знайти в формі атрибут з таким імям
    const field = form.querySelector(`[name=${fieldName}]`);
    if (!field.value) {
      field.insertAdjacentHTML(
        "afterend",
        `<p class="error">це поле обов'язкове для заповнення</p>`
      );
    }
  });
  // повертаю тру як що всі поля заповнені і фолс як що хоч одне не заповнене
  
  return Boolean(form.querySelector(".error")); // чи є хоч одне поле яке не заповнене
};

export default checkRequiredFields;
