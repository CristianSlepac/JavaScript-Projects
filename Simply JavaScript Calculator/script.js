//Toate operatiile : 

const adunare = (num, num2) => num + num2;
const scadere = (num, num2) => num - num2;
const impartire = (num, num2) => num / num2;
const imultirea = (num, num2) => num * num2;
const laPatrat = (num) => num ** 2;
const laPutere = (num, num2) => num ** num2;

//Programa :

function program(){
    //result :

    let result_operation;

    //userul selecteaza operatia : 

    let userSelectOpeation = prompt("Alege operatia : \nAdunare (1)\nScadere (2)\nImultire (3)\nImpartire (4)\nRidicarea la patrat (5)\nRidicarea la putere (6)");
    userSelectOpeation = Number(userSelectOpeation);

    let number1 = prompt("Introduce primul numar :");
    let number2 = prompt("Introduce primul numar :");
    number1 = Number(number1)
    number2 = Number(number2)

    switch(userSelectOpeation){
        case 1:
            result_operation = adunare(number1,number2);
            break;
        
        case 2:
            result_operation = scadere(number1,number2);
            break;

        case 3:
            result_operation = imultirea(number1,number2);
            break;

        case 4:
            result_operation = impartire(number1,number2);
            break;

        case 5:
            result_operation = laPatrat(number1,number2);
            break;

        case 6:
            result_operation = laPutere(number1,number2);
            break;

        default:
            console.log("Ati ales o operatie invalida , va rog incercati din nou !");
    }
    //Printarea resulatului : 
    result_operation = Number(result_operation)
    alert(`Rezultatul operatiei este : ${result_operation}`)



}


//Rularea programei :

program();

