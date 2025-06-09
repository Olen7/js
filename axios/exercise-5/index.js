import  {getUser}  from "./api/getUser.js";
import  {createItem}  from "./createItem.js"
const list = document.querySelector("#list")
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("details-button")) {
    const item = event.target.closest(".item");
    const details = item.querySelector(".user-details");
    details.classList.toggle("hidden");
  }
});

getUser().then(({data,error}) =>{
   if(error?.status === 404) {
        postList.innerHTML = "";
        return postList.insertAdjacentHTML("afterend", `<p class="error">${error.status} ${error.statusText}</p>`)
        
     }
     const item = data.map(createItem).join("")
     list.insertAdjacentHTML("beforeend", item)
})

