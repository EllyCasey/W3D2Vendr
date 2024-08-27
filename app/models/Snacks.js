
export class Snack {
    constructor(snackName, snackIcon, snackPrice) {
        this.name = snackName
        this.icon = snackIcon
        this.price = snackPrice
    }

    get SnackHTMLTemplate() {
        return /*html*/ `
        <section class="container-fluid">
        <div class="row">
          <div class="col-4 card">
            <p>${this.name}</p>
            <p>${this.price}</p>
            <p id="snackQuantity">0</p>
            <button onclick="app.SnacksController.addSnack('${this.name}')" class="btn btn-light">Add Snack</button>
          </div>
        </div>
      </section>
        `
    }
}
