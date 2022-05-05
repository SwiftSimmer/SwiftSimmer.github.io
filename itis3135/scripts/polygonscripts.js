function userNumber()
{
    var sides = parseInt(prompt("The Zombie Panther would like a number from 1 to 10"));
    var validation = validateEntry(sides);
    var output = getShape(validation);
    alert("That polygon is a(n) " + output); 
}
function getShape(sidesNumber)
{
    var shape;
    switch(sidesNumber) {
        case 1:
            shape = "line"
            break;
        case 2:
            shape = "digon"
            break;
        case 3:
            shape = "triangle"
            break;
        case 4:
            shape = "quadrilateral"
            break;
        case 5:
            shape = "pentagon"
            break;
        case 6:
            shape = "hexagon"
            break;
        case 7:
            shape = "septagon"
            break;
        case 8:
            shape = "octogon"
            break;
        case 9:
            shape = "nonagon"
            break;
        default:
            shape = "decagon"
      }
      return shape;
}
function validateEntry(usersSides)
{
    while(isNaN(usersSides) || usersSides < 1 || usersSides > 10)
    {
        alert("I said a number from 1 to 10");
        usersSides = parseInt(prompt("The Zombie Panther would like a number from 1 to 10"))
    }
    return usersSides;
}