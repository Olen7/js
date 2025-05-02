// отримую об'єкт з налаштуваннями 
export function creatTextField({label, type, name, placeholder, required,}){
    return `<div>
            <label>${label}</label>
            <input type="${type}" name="${name}" placeholder="${placeholder}" required=${required}>
            </div>`
}