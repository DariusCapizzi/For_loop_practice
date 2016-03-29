$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


// prime numbers
  var topNumber = parseInt($("input#numberOne").val());
  // console.log(firstNumber)

  for (var firstNumber = topNumber; firstNumber > 0 ; firstNumber-- ) {


      var value = 0;
      for (i = 1; i <= firstNumber ; i++ ){
        // console.log(i)

        if (firstNumber % i === 0){
          value++
          //console.log(value)
        }
      }
      console.log(value)
      if (value === 2 ){
        console.log(firstNumber + " is prime" + ". It has " + value + " divisor")
      } else {
        console.log(firstNumber + " is not prime" +  ". It has " + value + " divisors");
      }

}

// // find if input is prime
//   var firstNumber = parseInt($("input#numberOne").val());
//   var value = 0;
//
//   for (i = 1; i <= (firstNumber / 2); i++ ){
//     // console.log(i)
//
//     if (firstNumber % i === 0){
//       value++
//       //console.log(value)
//     }
//   }
//   console.log(value)
//   if (value === 1 ){
//     console.log(firstNumber + " is prime")
//   } else {
//     console.log(firstNumber + " is not prime");
//   }


// //  palindromes
//   var firstword = $("input#numberOne").val();
//   console.log(firstword)
//   var wordArray = firstword.split("");
//   console.log(wordArray);
//   var secondArray = wordArray.slice();
//   var secondArray = secondArray.reverse()
//   if (
//     secondArray.toString() === wordArray.toString()
//     //word array . reverse == word array
//   ){
//     console.log("success")
//   }

// // factorials
//
// // recursive
//   var firstNumber = parseInt($("input#numberOne").val());
//   function factory(val){
//     if (val <= 1){
//     return 1;
//     }
//     else{
//       return val * factory(val - 1);
//     }
//   }
//   factory(firstNumber)
//   console.log(factory(firstNumber))
// // iterative
//   var firstNumber = parseInt($("input#numberOne").val());
//   var fact = 1;
//   for (i = 0 ; i < firstNumber ; i++){
//     fact = fact * (firstNumber - i);
//     console.log(fact)
//   }



// word puzzle
    // var firstword = $("input#numberOne").val();
    // console.log(firstword);
    //
    // var wordArray = firstword.split("")
    // console.log(wordArray);
    //
    // for (i = 0; i < wordArray.length; i++){
    //
    //   if ( (wordArray[i].toLowerCase() === "a") || (wordArray[i].toLowerCase() === "e") || (wordArray[i].toLowerCase() === "i") || (wordArray[i].toLowerCase() === "o") || (wordArray[i].toLowerCase() === "u") || (wordArray[i].toLowerCase() === "y")){
    //     wordArray[i] = "-";
    //   }
    // }
    //
    //
    // console.log(wordArray.join(""))


// // forEach() to for
    // var arrayName = ["tom","dad","jesus"];
    // for (i = 1; i < arrayName.length ; i++ ){
    //   console.log(arrayName[i]);
    // }



// // count up by
    // var firstNumber = parseInt($("input#numberOne").val());
    //   console.log(firstNumber);
    // var secondNumber = parseInt($("input#numberTwo").val());
    //   console.log(secondNumber);
    //
    // if ( (isNaN(firstNumber)) || (isNaN(secondNumber)) || (firstNumber < 0) || (secondNumber >= firstNumber) ){
    //   debugger;
    //   $("#outputList").append( "invalid input" );
    // } else {
    //   for (var index = 0; index <= firstNumber; index += secondNumber){
    //
    //     $("#outputList").append(index + ", ");
    //   }
    // }

  });
});
