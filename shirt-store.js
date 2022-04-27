import { discounter } from "./discounter";

export const cost = (shirts) => {

  const uniqueItems = new Set(shirts).size;
  let theDiscount = discounter(uniqueItems);

  let fullPrice = shirts.length * 800.0
  

  console.log("$$$$$ Unique Items, The Discount, The Full Price $$$$$$")
  console.log(uniqueItems)
  console.log(theDiscount)
  console.log(fullPrice)

  return fullPrice - (fullPrice*theDiscount) ;

};
