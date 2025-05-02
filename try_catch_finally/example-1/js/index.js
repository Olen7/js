import { addIdToArr } from "./functions.js";
import { ContentError } from "./errors.js";

const items = [
    {
        name: "User",
        birthday: "12.12.1990"
    },
    {
        name: "Student",
        birthday: "01.12.1995"
    },
];

const backendResponse = null;

try {
    const itemsWithId = addIdToArr([1, 3]);
    console.log(itemsWithId);
}
catch(error) {
    if(error instanceof ContentError) {
        alert(error.additionalMessage)
    }
    alert(error.message)
}
