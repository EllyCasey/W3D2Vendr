import { AppState } from "../AppState.js";


class SnacksService {
    addSnack() {
        AppState.snacks++
        console.log('Quantity of Snacks goes up!', AppState.snacks)
    }
}

export const snacksService = new SnacksService()