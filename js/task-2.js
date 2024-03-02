const storage = ["Nanitoids", "Prolonger", "Antigravitator"];
const storage = new Storage("Nanitoids", "Prolonger", "Antigravitator");
    
    

const items = storage.getItems();
console.table(items); 

storage.addItem("Droid");
console.table(storage.items); 
storage.removeItem("Prolonger");
console.table(storage.items); 





// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]