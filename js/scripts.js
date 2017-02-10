var add = function(number1,number2){
	return number1 + number2;
};

var number1 = parseInt(prompt("What is number 1?"));
var number2 = parseInt(prompt("What is number 2?"));
alert ("Number 1 plus Number 2 is " + add(number1,number2));


var subtract = function(number1,number2){
	return number1 - number2;
};

var number1 = parseInt(prompt("What is number 1?"));
var number2 = parseInt(prompt("What is number 2?"));
alert ("Number 1 - Number 2 is " + subtract(number1,number2));


var multiply = function(number1,number2){
	return number1 * number2;
};

var number1 = parseInt(prompt("What is number 1?"));
var number2 = parseInt(prompt("What is number 2?"));
alert ("Number 1 multiplied by Number 2 is " + multiply(number1,number2));


var divide = function(number1,number2){
	return number1 / number2;
};

var number1 = parseInt(prompt("What is number 1?"));
var number2 = parseInt(prompt("What is number 2?"));
alert ("Number 1 divided by Number 2 is " + divide(number1,number2));


var bmi = function(height,weight) {
	return height * weight / 5;
  };

var height = parseInt(prompt("What is your height?"));
var weight = parseInt(prompt("What is your weight?"));

var result = bmi(height,weight);
alert("Your BMI is " + result);


var convertCtoF = function(tempC) {
	return (tempC  * 2) + 30;
  };

var convertFtoC = function(tempF){
	return (tempF - 30) / 2;
};

var tempC = parseInt(prompt("What is the temperature in Celcius?"));
var tempF = parseInt(prompt("What is the temperature in Farenheit?"));

alert("The temperature " + tempF + " farenheit is " + convertFtoC(tempF) + " Celcius.");
alert("The temperature " + tempC + " Celcius is " + convertCtoF(tempC) + " Farenheit.");

var convertTemp = function(temp,CorF) {
  if (CorF.toUpperCase().charAt(0) === "C") {
  alert("In Celcius if and value is " + CorF);
    return temp + " degrees Celcius is " + ((temp * 2) + 30) + " degrees Farenheit.";
  } else {
alert("In Farenheit if and value is " + CorF);
  	return temp + " degrees Farenheit is " + ((temp - 30) / 2) + " degrees Celcius.";
  }
};

var temp = parseInt(prompt("What is the temperature in numbers"));
var CorF = prompt("Is the temperature Celcius or Farenheit? ");
alert(convertTemp(temp,CorF));


// Example of the use of case insentitive replacement "i"
// There is also global "g"
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
alert(newstr);
