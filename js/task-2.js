const storage = new Storage([
    "Nanitoids",
    "Prolonger",
    "Antigravitator"]);
    

console.log(storage.getItems());   
storage.addItem("Droid"); 
 console.log(storage.getItems());   
  storage.removeItem("Prolonger");       
    console.log(storage.getItems()); 

    
        





// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
