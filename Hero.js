console.log("Hello world ,I'm Caro Kitonga"); //printing messages

//Variables use var , let or const
var a; //declaring a variable
var b = 2;//assgining a variable
a = 1;
b = a;
console.log(a) //Caro! no quotes here!

//output = 1

 //operations
 var y = 5;
 var x = 7;
 var c;
 c = x % y;
//Coumpound assignment
 y += 6; //same as y= y+6
 x *= 10; //same as x = x*10
y++;
console.log(y, x ,c)
//NOTE y= 5+6+(increment;1)=12
  //STRINGS -quotes and backticks
  var firstName = "Caro" + " ";
  var secondName = "Kitonga";
  firstName += secondName; //same as Fistname + Lastname (concatinating)
  console.log(firstName);

  //what's the length of your string?
 Var = lastNameLength = 0;
 lastName = "Kitonga";
 lastNameLength = lastName.length
  console.log(lastNameLength); //OUTpUT = 7

  //Bracket notation
  var yourName1 = "Musangi";
  var firstLetter = yourName1[0];
console.log(firstLetter); // M

var yourName2 = "Kitonga";
var lastLetter = yourName2[yourName2.length -1] //last char
console.log(lastLetter);// output a

//Arrays
var theCity = ["Mombasa", 001]
var accessCity = theCity[0];
console.log(accessCity);//single array

//Nested/Multidimentional array
var allCities = [["cape town", 100] , ["London" ,101]];
var citynum = allCities[1] [0];//accessing element
allCities[0] [0] = "Newyork" ; //Let's modify this array -NB:we are using double brackets one for the arrays in array,second for elements in nested arrays
console.log(citynum);// outputs second element London
console.log(allCities); //Cape town is replaced by Newyork
//push
allCities.push(["Nairobi", 002]);//adding array to the end 
console.log(allCities);

//pop() to extract an array at the end 
var mydata = [1, 2, 3, 4];
var removeData = mydata.pop();
console.log(removeData); //output 4 (element removed)
mydata.pop(); 
console.log(mydata); //NB output [1,2] three is eliminated  is eliminated.Why 3 and not 4 recall 4 was extracted so the remaining elements were [1,2,3].You gerrit?

//shift() to extract an array at the beginning
var countNum = [1, 2, 3, 4];
countNum.shift();
console.log(countNum); // 1 is eliminated
//unshift() to add element at the begining
countNum.unshift(7);
console.log(countNum); //7 is the leading element in the array followed by two
  
//FUNTIONS
function sumNum(a,b) {
 console.log(a + b);
}
sumNum(2,4);//sums 2(a) + 4(b) = 6

//Global scope and local scope
//Global -declared outside funtion - accessed anywhere
//Local Variable declared withing a funtion.
var globalVar = "I am global"; //Global variable
function localscope () {
  var local1Var = 5; // local variable
console.log(local1Var); 
}
localscope();// out put local variable
console.log(globalVar);// Global variable is accessed and out put is I am global

//Function and Return
function sumInt(int) {
  return int + 5; 
  }
  console.log(sumInt(15)); //15+5

  //push and shift in function
  function myWears(skirt, dress) { //skirt[1,2,3,4] dress [5]
    skirt.push(dress); //add dress to the end of array
return skirt.shift(); //remove 1st element 1
  }
  var allclothes = [1, 2, 3, 4];
  
console.log("before : " + JSON.stringify(allclothes));  //output = remains unchanged
console.log(myWears(allclothes, 5));//notice skirt becomes reference to allclothes
console.log("after :" + JSON.stringify(allclothes)); //all changes take place here.5 is pushed and one removed;skirt.push,skirt.shift ; [2,3,4,5]

//BOOLEN and IF
function trueOrFalse(Aretheromourstrue ){
  if (Aretheromourstrue){
  return "Yes they are true";
}
return "No,they are false";
}
console.log(trueOrFalse(false));//Out put No ,They are false.

//true/false 
function lessOr(a,b){
  return a < b;
}
console.log(lessOr(26,15)); //false
console.log(lessOr(15,26));//True


//more example on if

function equalTo(val){
  if (val == 10){
    return "Equal to"
  }
return "Not Equal to"
}
console.log(equalTo(11)); //11 != 10

// strict equality sign ===
//strict ineqeality sign !==

//Greater or less than
function greaterThan(val){
  if (val > 1000){
    return "Greater than 1000";
  }
  if (val > 10){
    return "Greater than 10";
  }
  return "less than 10"
}
console.log(greaterThan(7));
console.log (greaterThan(1001));

//Avoiding nested if using 0r and and
function andIf(val){
  if (val <= 50 && val >=25){
    return "inside range"
  }
  return "outside range"
}
console.log (andIf(27)); // AND 

//OR with <,>
function orIf(val){
  if (val > 0 || val < 25){
    return "inside range"
  }
  return "outside range"
}
console.log (orIf(67)); //OR

//else and else if using studentmarks
function student_marks(val){
  if (val >= 70 && val ==100){
    return "A"
  }
  else if (val >= 60 && val < 70){
    return "B"
  }
  else if (val >= 50 && val < 60){
    return "C"
  }
  else if (val >= 40 && val < 50){
    return "D"
  }
  else 
  return "Why are you in campus?"
}
console.log (student_marks(56)); //C
console.log (student_marks(28)); //Wafanyaje Campus?

//Use switch? yes
function switchCase(val){
  var answer = "";
  switch (val){
    case 1:
      answer =  "Dark";
      break;
      case 2:
        answer = "Lighter";
        break;
        case 3:
          answer = "Blue";
        break;
        case 4:
          answer = "white"
          break;
          default: //acts like else
          answer = "else"
          break;
  }
  return answer;
}
console.log(switchCase(3));
console.log(switchCase(7));

//more on switch
function cases(val){
  var answer = "";
  switch (val) {
  case 1:
  case 2:
  case 3:
  answer = "mid" //1,2 or
  break;
  case 5:
    case 6:
      case 7:
        answer = "high" //5,6 r7
        break;
  }
        return answer;
}
        console.log(cases(7)); //output mid

        //1;37 multiple switch statements-

//Returning boolen values from funtions
//Cancellng if else logic
function isLess (a, b) {
  return a < b;
}
console.log(isLess(10,15));

//Returning Early Pattern from Funtions
function cdTest(c , d){
  if (c < 0 || d < 0) {} {
    return undefined;
}
return Math.round(Math.pow(Math.sqrt(c) + Math.sqrt(d), 2));
}
console.log(cdTest(-2,2));
//Out put ,undefined 
 
//Accesing object Properties with Dot Nototaion and Bracket.
var testObj = {
  "hat": "ballcap",
  "my shirt": "jersey",
  "shoes": "cleats",
  };
  testObj.hat = "cap"; //update object properties
  testObj["skirt"] = "flare" //adding properties
  delete testObj.shoes;
var hatValue = testObj.hat;
var shirtValue = testObj["my shirt"];
console.log(hatValue);
console.log(shirtValue);
console.log(testObj["shoes"]); //output ,undefined
console.log(testObj["skirt"]); //output , flare

//We can use objects to replace switch statements

//Accessing object properties in nested array
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
      },
      {
        type:"trees",
        list:[
          "fir",
          "pine",
          "birch"
        ]
      }
          ];
          
          var secondTree = myPlants[1].list[1]; //second tree is the second element in the array,pine is the second element in list array
          console.log(secondTree); //hence output "pine"

