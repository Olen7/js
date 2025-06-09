function serializeForm(form){
    const data = form.querySelectorAll('[name]')
      return [...data].reduce((acc, el) =>{
        const {name, value, checked, type} = el
        const newValue = type === "checkbox" ? checked : value
        return {...acc, [name] : newValue}
      },{})
}
export default serializeForm