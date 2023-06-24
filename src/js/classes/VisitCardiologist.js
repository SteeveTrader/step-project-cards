import Visit from "./Visit.js";
export default class VisitCardiologist extends Visit {
    constructor() {
        super();
        this.doctor = document.createElement("div");
    }

    createElements() {
        super();
        this.doctor.className
    }
}