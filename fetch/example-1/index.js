// const postRequest = fetch("https://jsonplaceholder.typicode.com/post");
/*
new Promise((resolve, reject)=> {
    const request = request-to-"https://jsonplaceholder.typicode.com/posts";
    if(request.error) {
        reject(request.error);
    }
    resolve(request.response);
})
*/
// console.log(postRequest);
const postList = document.getElementById("post-list");
const postListError = document.getElementById("post-list-error");

const postRequest = fetch("https://jsonplaceholder.typicode.com/posts");

postList.insertAdjacentHTML("afterend", `<p id="posts-loading">Loading posts....</p>`);

postRequest
    .then(response => {
        if(!response.ok) {
            const responseError = new Error("Request failed");
            responseError.status = response.status;
            throw responseError;
        }
        return response.json();
    })
    .then(body => {
        const elements = body.map(({title}) => `<li>${title}</li>`).join("");
        // console.log(elements)
        postList.insertAdjacentHTML("beforeend", elements);
    })
    .catch(error => {
        if(error.status === 404) {
            postListError.textContent = "Пости не знайдені";
        }
        // console.log(error.message);
        // console.log(error.status);
    })
    .finally(()=> {
        const loading = document.getElementById("posts-loading");
        loading?.remove();
    })