$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


// factorials

// recursive
  var firstNumber = parseInt($("input#numberOne").val());
  function factory(val){
    if (val <= 1){
    return 1;
    }
    else{
      return val * factory(val - 1);
    }
  }
  factory(firstNumber)
  console.log(factory(firstNumber))
// // iterative
//   var firstNumber = parseInt($("input#numberOne").val());
//   var fact = 1;
//   for (i = 0 ; i < firstNumber ; i++){
//     fact = fact * (firstNumber - i);
//     console.log(fact)
//   }



// // word puzzle
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
