import { snacksService } from "../services/SnacksService.js";

export class SnacksController {
    constructor() {
        console.log('Snacks Controller is loaded')
    }

    addSnack() {
        console.log('Adding Snack!');
        snacksService.addSnack()
    }
}