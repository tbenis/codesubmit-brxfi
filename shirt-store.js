import { discounter } from "./discounter";

export const cost = (shirts) => {
  // const cartTracker = {};

  let counter = 0;
  let grandTotal = 0;
  

  //sort the array from asc to desc
  shirts = shirts.sort();
  const uniqueItemsArr = Array.from(new Set(shirts));

  let flag = true;
  while (flag) {
    console.log("#####");
    console.log(shirts);
    for (let i = 0; i < shirts.length; i++) {
      if (JSON.stringify(uniqueItemsArr) !== JSON.stringify(shirts)) {
        if (shirts[i] !== shirts[i + 1] && shirts[i] == shirts[i - 1]) {
          counter += 1;
          //remove last occurence of repeat item in array
          shirts.splice(i, 1);
          console.log(shirts);
        }
      } else {
        console.log("&&&&&&");
        console.log("Match found");
        flag = false;
        break;
      }
    }
    console.log("$$$$$");
    console.log(shirts);
    console.log(counter);
      grandTotal += counter * 800 - counter * 800 * discounter(counter);
    counter = 0
    if (flag == false) {
      break;
    }
  }
  let theRemainingDiscount = new Set(shirts).size * 800 -
  (new Set(shirts).size * 800 * discounter(new Set(shirts).size));
  
  return theRemainingDiscount + grandTotal;
};
