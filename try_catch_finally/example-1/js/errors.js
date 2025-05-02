export class ContentError extends Error {
    constructor(message) {
        super(message);
        this.additionalMessage = "Wrong content type";
    }
}