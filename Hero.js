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

//