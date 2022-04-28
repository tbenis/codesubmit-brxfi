import { discounter } from "./discounter";

export const cost = (shirts) => {
  // const cartTracker = {};

  let counter = 0;
  let grandTotal = 0;

  //sort the array from asc to desc
  shirts = shirts.sort();
  const uniqueItemsArr = new Set(shirts);

  while(JSON.stringify(uniqueItemsArr)==JSON.stringify(shirts)){
    console.log("#####")
    console.log(shirts)
    for(let i = 0; i < shirts.length-1; i++){
      if(shirts[i] !== shirts[i+1]){
        counter += 1;
        //remove last occurence of repeat item in array
        shirts.splice(i, 1);
        console.log(shirts)
      }
    }

    grandTotal += ((counter * 800) - ((counter * 800) * discounter(counter)))
    counter = 0

  }

  //remaining items in arr will not be duplicates
  let theRemainingDiscount = ((new Set(shirts).size * 800) - ((new Set(shirts).size * 800) * discounter(shirts.length)));
  

  return theRemainingDiscount + grandTotal;
};
