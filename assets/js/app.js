

function luhnAlgorithm (arr) {  

    let flag;
    let newMassEven = [],
        newMassOdd = [];

    arr.reverse();

    for (let i = 1; i < arr.length; i = i + 2) {

        let temp = arr[i];
              
            if (temp >= 5) {
                temp = temp * 2 - 9;
                console.log(temp);
            } else {
                temp = temp * 2 
                console.log(temp);
            }

        newMassEven.push(temp);
    }

    for (let i = 0; i < arr.length; i = i + 2) {

        let temp = Number(arr[i]);
        newMassOdd.push(temp);
        let result2 = newMassOdd.reduce((sum, current) => sum + current, 0);

    }

    let result1 = newMassEven.reduce((sum, current) => sum + current, 0);
    let result2 = newMassOdd.reduce((sum, current) => sum + current, 0);
    let controlSumm = result1 + result2;
           
        if (controlSumm == 0) { 
            flag = false;              
        } else  if (controlSumm % 10 == 0) {
            flag = true;                  
        } else {    
            flag = false;
        }

    return flag;
}


function defineCardType(arr) {
            
    let text;
    arr.reverse();

        if (arr[0] == 4) {
            text = 'Visa';
        } else if (arr[0] == 5 && (arr[1] == 1 || arr[1] == 2 || arr[1] == 3 || arr[1] == 4 || arr[1] == 5)) {

            text = 'MasterCard';

        } else if(arr[0] == 2) {

            let [a, b, c, d, e, k] = arr;
            let temp = a + b + c + d + e + k;

            const massMasterCard = createMassOfNumbers(222100, 272099);
            
                for (i = 0; i < massMasterCard.length; i++) {

                    if (massMasterCard[i] == temp) {
                        text = 'MasterCard';
       
                    } 
                } 

        } else  if ((arr[0] == 5 && (arr[1] == 0 || arr[1] == 8)) ||  (arr[0] == 6 && (arr[1] == 3 || arr[1] == 7))) { 
            text = 'Maestro';
        } else {
            text = 'Other type of card';
        }

    return text;
}


function createMassOfNumbers(start, end) {
    
    let arr = [];    

        for (let i = start; i <= end; i++) {
            arr.push(i);
        }

    return arr;
}


function userFillForm() { 

    let cardNumber = formInput.value;  
    let cardNumberMass = [...cardNumber];
     
        if (luhnAlgorithm(cardNumberMass) == true) {
            document.getElementById('CheckCardNumber').innerHTML = 'The Card Number is correct';
            document.getElementById('CardNumberSystem').innerHTML = defineCardType(cardNumberMass);
        } else if(luhnAlgorithm(cardNumberMass) == false){
            document.getElementById('CheckCardNumber').innerHTML = 'The Card Number is NOT correct';
            document.getElementById('CardNumberSystem').innerHTML = '';
        }    
}    

