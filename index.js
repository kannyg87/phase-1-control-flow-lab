function scuberGreetingForFeet(val){
  // Write your code here!
 if (val<= 400){
  return "This one is on me!"
 }
 if (val>= 400 && val <=2000){
  return "That will be twenty bucks."
 }
 if (val>= 2000 &&val < 2500){
  return "I will gladly take your thirty bucks."
 }
 if (val >= 2500) {
  return "No can do.";
}
}

function ternaryCheckCity(city){
  // Write your code here!
   return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here!
    switch(tip) {
        case 'generous' : return 'Thank you so much.';
        case 'not as generous' : return 'Thank you.';

        default : return 'Bye.';

    }
}