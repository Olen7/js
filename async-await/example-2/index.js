/*
POST - додати (на сервері цього не було). Використовується для додавані нового об'єкту. 
Повертає новий об'єкт + id. Статус має бути 201 (Created)
PUT - частково оновити або повністю замінити (якщо дозволяє бекенд) вже існуючий на сервері об'єкт.
Повертає оновлений об'єкт. Статус 200
PATCH - частково оновити вже існуючий на сервері об'єкт.
Повертає оновлений об'єкт. Статус 200
DELETE - видаляє. Може мати тіло, може не мати.
Повертає або 204 статус (тоді тіла відповіді не буде), або 200 і повідомлення про видалення,
або видалений об'єкт.
*/

import { addProduct, deleteProductById } from "./api/products.js";

deleteProductById(62).then(({data, error})=> {
    console.log({
        data,
        error,
    });
    if(error.status === 404) {
        alert(error.message);
    }
})

// const newProduct = {
//     title: "Product title 2", 
//     description: "Product description",
//     price: "2000",
//     image: "https://avatars.githubusercontent.com/u/56642676",
// }

// addProduct(newProduct).then(({data, error})=> {
//     console.log({
//         data,
//         error,
//     });
// })