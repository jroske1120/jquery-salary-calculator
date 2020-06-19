console.log('in JS');

$(document).ready(onReady);

let employees = [];

function onReady() {
    console.log('in onReady');
    //capture click event
    $('#submitEmployeeInfo').on('click', addEmployeeInfo);
} // end onReady

function addEmployeeInfo() {
    console.log('in addEmployeeInfo');
    //gather user input and place in an object
    const newObject = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        IDNumber: $('#IDNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#salaryIn').val()
    }
    console.log('newObject:', newObject);
    employees.push(newObject);//push the object into an array
    displayAdded();
    $('#employeeInfoIn')[0].reset();
    calculateMonthlyCost(); //added calculation to click 
    highlightInTheRed();
    return true;
}//end addEmployeeInfo


function displayAdded() {
    console.log(' in displayAdded');
    //target employeeInfoOut by id
    let el = $('#employeeInfoOut');
    //empty
    el.empty();
    event.preventDefault();
    //loop through inventory
    for (i = 0; i < employees.length; i++) {
        //append each to the DOM
        el.append(`<li> First Name: ${employees[i].firstName}
    Last Name: ${employees[i].lastName} 
    ID Number: ${employees[i].IDNumber}
    Job Title: ${employees[i].jobTitle}
    Annual Salary: ${employees[i].annualSalary}</li>`)
    }
    let el1 = $('#monthlyCostOut');
    el1.empty();
    el1.append(calculateMonthlyCost());
}

//calculateMonthlyCost
function calculateMonthlyCost() {
    console.log(' in calculateMonthlyCost ');
    let monthlyCost = 0;
    for (i = 0; i < employees.length; i++) {
        monthlyCost += Number(employees[i].annualSalary); //converts string to number
        // let el = $('#monthlyCostOut');
        // el.append(`<div>Cost: ${monthlyCostOut}</div>`);//add up all [i] at annualSalary object
    } sum = monthlyCost/12;
    return sum;//divides by 12
}

function highlightInTheRed(){
    if (calculateMonthlyCost() > 20000) {
        console.log('Too much$');
        $('#monthlyCostOut').addClass('yellowBlockHighlight');
    }
}