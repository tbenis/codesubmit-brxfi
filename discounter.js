export const discounter = (shirtVariations) => {
    //Creating Discount 
    if(shirtVariations == 2){
        return 0.05;
    }else if(shirtVariations == 3){
        return 0.10;
    }else if(shirtVariations == 4){
        return 0.20;
    }else if(shirtVariations == 5){
        return 0.25;
    }
    return 0;
  };