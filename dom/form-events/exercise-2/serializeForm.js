const serializeForm = (form) => {
  const elements = form.querySelectorAll("[name]");
  //console.log(elements);
  const result = [...elements].reduce((acum, el) => {
    console.log(el.value);
    const { name, value } = el;
    return { ...acum, [name]: value };
  }, {});
  return result;
};

export default serializeForm;
