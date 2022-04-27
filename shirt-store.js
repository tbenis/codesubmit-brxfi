import { discounter } from "./discounter";

export const cost = (shirts) => {

  const uniqueItems = new Set(shirts).size;
  let thediscount = discounter(uniqueItems);


};
