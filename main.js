// assignment : if we use same condition 2 times. which will be executed ?

let days = 1;
let message = undefined;

switch (days) {
    case 1 :
        message = "sunday";
        break;
    case 1 :
        message = "Monday" ;
        break;
    case 3 :
        message = "Tuesday" ;
        break;
    case 4 :
        message = "wednesday" ;
        break;
    case 5 :
        message = "thursday" ;
        break;    
    case 5 :
        message = "friday" ;
        break;    
    case 5 :
        message = "saturday" ;
        break;    
    default :
        message = "enter days between 1 to 7";            
}

console.log(message);
