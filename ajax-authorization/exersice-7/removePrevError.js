export function removePrevError(element){
    const prevError = document.querySelector(`.${element}`);
if (prevError) prevError.remove();
}