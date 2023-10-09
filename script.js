let number1 = 25;

if (number1 % 2 === 0) {
  console.log("juft son");
} else {
  console.log("toq son");
}


if (a % 5 === 0) {
      console.log("5 ga bolinadi");
    } else if (a % 3 === 0) {
      console.log("3 ga bolinadi");
    } else if (a % 3 === 0 && a % 5 === 0) {
      console.log(" 3 va 5 ga bolinadi");
    } else {
      console.log("3 va 5 ga bolinmaydi");
    }




    var number2 = 3; // Ixtiyoriy raqam a
    var number3 = 7; // Ixtiyoriy raqam b
    
    console.log("sonlar: " + number2 + ", " + number3);
    
    if (Math.abs(number2 - 5) < Math.abs(number3 - 5)) {
      console.log(a + "5 ga yaqinroq");
    } else if (Math.abs(number2 - 5) > Math.abs(number3 - 5)) {
      console.log(number3 + "5 ga yaqinroq");
    } else {
      console.log("Ikkta son ham 5 ga teng");
    }