const storage = ["Nanitoids", "Prolonger","Antigravitator"];
class Storage {
    constructor() {
        this.items = items;
    }
}

  
getItems(item);
       
    

addItem(item);
      
removeItem(item);
       

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// storage.addItem("Droid");
//  console.log(storage.getItems());    
// storage.removeItem("Prolonger");
// console.log(storage.getItems());






// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
