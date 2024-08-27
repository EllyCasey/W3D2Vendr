
export class Snack {
    constructor(data) {
        this.name = data.name
        this.imgURL = data.imgURL
        this.price = data.price
    }

    get SnackHTMLTemplate() {
        return /*html*/ `
        <section class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-4 card">
            <p>${this.name}</p><span>${this.imgURL}</span>
            <p>${this.price.toFixed(2)}</p>
            <button onclick="app.SnacksController.addSnack('${this.name}')" class="btn btn-light">Add Snack</button>
          </div>
        </div>
      </section>
        `
    }
}
