import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML } from "../utils/Writer.js";

export class SnacksController {

    constructor() {
        console.log('Snacks Controller loaded');
        this.drawSnack()
    }

    drawSnack() {
        const snacks = AppState.snacks
        let innerHTMLString = ``
        snacks.forEach((snacks) => innerHTMLString += snacks.SnackHTMLTemplate)
        setHTML('cards', innerHTMLString)
    }
}