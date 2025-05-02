const fetchProducts = async () => {
  const postList = document.getElementById("post-list");
  const postListError = document.getElementById("post-list-error");
  try {
    postList.insertAdjacentHTML(
      "afterend",
      `<p id="posts-loading">Loading posts....</p>`
    );
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // якщо перед функцією, що повертає проміс, написати await, у зміні
    // в разі успішного виконання промісу збережеться на проміс в режимі очікування,
    // а результат його успішного виконання. Якщо з проміс завершиться з помилкою,
    // функція викине (throw) помилку, бо .catch вже немає
    if (!response.ok) {
      const responseError = new Error("Request failed");
      responseError.status = response.status;
      throw responseError;
    }

    const body = await response.json();
    const elements = body.map(({ title }) => `<li>${title}</li>`).join("");
    postList.insertAdjacentHTML("beforeend", elements);
  } 
  catch (error) {
    if (error.status === 404) {
      postListError.textContent = "Пости не знайдені";
    }
  } 
  finally {
    const loading = document.getElementById("posts-loading");
    loading?.remove();
  }
};

fetchProducts();

// const postRequest = fetch("https://jsonplaceholder.typicode.com/posts");

// postList.insertAdjacentHTML("afterend", `<p id="posts-loading">Loading posts....</p>`);

// postRequest
//     .then(response => {
//         if(!response.ok) {
//             const responseError = new Error("Request failed");
//             responseError.status = response.status;
//             throw responseError;
//         }
//         return response.json();
//     })
//     .then(body => {
//         const elements = body.map(({title}) => `<li>${title}</li>`).join("");
//         // console.log(elements)
//         postList.insertAdjacentHTML("beforeend", elements);
//     })
//     .catch(error => {
//         if(error.status === 404) {
//             postListError.textContent = "Пости не знайдені";
//         }
//         // console.log(error.message);
//         // console.log(error.status);
//     })
//     .finally(()=> {
//         const loading = document.getElementById("posts-loading");
//         loading?.remove();
//     })
