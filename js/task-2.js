class Storage {
    #items;
    constructor(initialItem) {
        this.#items = initialItem || [];
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const indexOfItem = this.#items.indexOf(itemToRemove);
        if (indexOfItem !== -1) {
            this.#items.splice(indexOfItem,1);
        }
    }
    
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems());

storage.removeItem("Prolonger");
console.log(storage.getItems());

storage.removeItem("Scaner");
console.log(storage.getItems()); 