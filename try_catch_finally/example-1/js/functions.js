import { ContentError } from "./errors.js";

export const addIdToArr = (arr) => {
    try {
        if(!arr.every(item => typeof item === "object")) {
            throw new ContentError("Argument must be array of objects");
        }
        const result = arr.map((item, index)=> ({...item, id: index + 1})); // throw new TypeError()
        console.log("After result");
        return result;
    }
    catch(error) {
        // console.log("Something went wrong")
        console.log(error);
        // if(error.message.includes("Cannot read properties")) {
        //     error.message = "Argument must be array";
        // } 
        // if(error.name === "TypeError") {
        //     error.message = "Argument must be array";
        // }
        if(error instanceof TypeError) {
            error.message = "Argument must be array";
        }
        throw error;
        // alert("Argument must be array")
    }
};