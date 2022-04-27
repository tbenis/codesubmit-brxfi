import { discounter } from "./discounter";

export const cost = (shirts) => {

  const uniqueItems = new Set(shirts).size;
  let thediscount = discounter(uniqueItems);
  let fullPrice = shirts.length * 800.0


  return fullPrice - (fullPrice*thediscount) ;

};
