function scriptTest()
{
    alert("Hey my script is running");
}
function dateAndTime() 
{
var today = new Date();
var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear(); 
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = "Today is " + date + " and it is " + time;
document.getElementById("date").innerHTML = dateTime;
}
function greeting()
{
    var name = document.getElementById("name").value;
    var feeling = document.getElementById("feeling").value;
    var nameFeeling = "Zombie Panther welcomes you, " + name + "!" + " We're glad/sorry you are feeling " + feeling + "!"; 
    document.getElementById("greetingoutput").innerHTML = nameFeeling;
}
function sumOfTwoNumbers()
{
    var number1 = prompt("Enter the first number");
    var number2 = prompt("Enter the second number");
    const sum = +number1 + +number2;
    alert(number1 + " + " + number2 + " = " + sum);
}
function calculateTotal()
{
    var price = prompt("Enter the price of an item");
    var amount = prompt("Enter how the many items you want");
    var total = price * amount
    alert("The total for " + amount + " Items at $" + price + " is $" + total.toFixed(2))
}
function calculateTip()
{
    var cost = prompt("Enter the amount for your bill");
    var tip = cost * 0.15
    var total = +cost + +tip;
    alert("The tip will be $" + tip.toFixed(2) + ", your total will be $" + total.toFixed(2))
}
function findPantherPopulation()
{
    var currentPopulation = prompt("what is the number of panthers in the forest");
    var lostPanthers = prompt("how many panthers died");
    var newPopulation = +currentPopulation - +lostPanthers;
    alert("The new population of panthers is " + newPopulation)

}
function pantherCubs()
{
    var litterSize = Math.floor(Math.random()*4);
    var litteroutput = "The mother panther had a litter of " + litterSize + " cubs";
    document.getElementById("litter").innerHTML = litteroutput;
}