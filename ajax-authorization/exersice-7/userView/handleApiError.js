export function handleApiError(error){
    if(!error) return
    console.log(error.response.data.message);
     alert(error.response.data.message)
}