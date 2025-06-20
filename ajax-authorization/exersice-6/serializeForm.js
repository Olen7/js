const serializeForm = form => {
    const elements = form.querySelectorAll("[name]");
    //console.log(elements);
    const result = [...elements].reduce((acum, el) => {
        const {name, value, type, checked} = el;
        const newValue = type === "checkbox" ? checked : value
    
        return {...acum, [name]: newValue};
    }, {});
    return result;
}

export default serializeForm;