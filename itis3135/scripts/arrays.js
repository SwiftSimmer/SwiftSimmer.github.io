var person = [];
var salaries = [];
function addSalary()
{
    var name = document.getElementById("employee").value;
    var salary = document.getElementById("salary").value;

    if(salary == "")
    {
        alert("You need a salary");
    } else
    {
        person.push(name);
        salaries.push(parseInt(salary));
    }
}
function displayResults()
{
    var average = 0;
    var total = 0;
    var max = salaries[0];

    for(x = 0; x < salaries.length; x++)
    {
        total += salaries[x];
        if (salary[x] > max) 
        {
            max = salary[x]; 
        }
    }
    average = total/salaries.length;

    document.getElementById("results").innerHTML = "<h2>Salary Results</h2><p>Average: " + average + "</p><p>Highest: "+ max + "</p>";
}
function displaySalary()
{
    var table = "<tr><th>Name</th><th>Monthly Salary</th></tr>";
    for(var x = 0; x < person.length; x++)
    {
        table += "<tr><td>" + person[x] + "</td><td>" + salaries[x] + "</td></tr>";
    }
    document.getElementById("results_table").innerHTML = table;
}