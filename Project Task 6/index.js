//Temperature in kelvin
const kelvin = 293;

//Temperature in Celsius
const celsius = kelvin-273;

//Temperature in Fahrenheit
var fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log("The temperature is "+fahrenheit+ " degrees Fahrenheit.");

//conversion to newton scale
var newton=Math.floor(celsius * (33/100));
console.log("Temperature in Newton: "+ newton);