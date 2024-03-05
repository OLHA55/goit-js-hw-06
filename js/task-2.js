const storage = ["Nanitoids", "Prolonger","Antigravitator"];
class Storage {
    constructor() {
        this.items = `products`;
    }
}

    getProducts() {
        const productsstorage = storage.getItems(this.items);
        if (productsstorage !== null) {
            return JSON.parse(products.Storage);
        }
        return [];
    }

















const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
