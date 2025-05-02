import { getFullName } from "./functions.js";

export default class Animal {
    name;
    chip;
    birthday;

    constructor({name, chip, birthday}) {
        this.name = name;
        this.chip = chip;
        this.birthday = birthday;
    }

    get age() {

    }
}