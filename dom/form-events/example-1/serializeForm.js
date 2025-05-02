const serializeForm = form => {
    const elements = form.querySelectorAll("[name]");
    console.log(elements);
    const result = [...elements].reduce((acum, el) => {
        const {name, value} = el;
        return {...acum, [name]: value};
    }, {});
    return result;
}

export default serializeForm;