console.log('in JS');

$(document).ready(onReady);

let employees = [];

function onReady() {
    console.log('in onReady');
    //capture click event
    $('#submitEmployeeInfo').on('click', addEmployeeInfo);
    $( '#employeeInfoOut' ).on( 'click', removeEmployee );
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
    highlightInTheRed(); //highlights if >20k
    return true;
}//end addEmployeeInfo

function displayAdded() {
    console.log(' in displayAdded');
    let el = $('#employeeInfoOut');  //target employeeInfoOut by id
    el.empty();     //empty
    event.preventDefault();
    //loop through inventory
    for (i = 0; i < employees.length; i++) {        //append each to the DOM
        el.append(`<div id="specificEmployee"><li id= "specificDelete"> First Name: ${employees[i].firstName}
    Last Name: ${employees[i].lastName} 
    ID Number: ${employees[i].IDNumber}
    Job Title: ${employees[i].jobTitle}
    Annual Salary: ${employees[i].annualSalary}</li>
    <button class='deleteButton'>Remove</button></div>`)
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
    if (calculateMonthlyCost() > 20000) { //check if >20k
        console.log('Too much$');
        $('#monthlyCostOut').addClass('redBlockHighlight'); //add in-line highlight if >20k
    }
}

function removeEmployee(){
console.log('in removeEmployee');
console.log(employees);
$('#specificEmployee').remove();
for ( i=0; i<employees.length; i++){
    employees.splice[i];
}
}//employees.splice($( this));//w/o this, removes from DOM but not from array. With, removes from DOM but empties array
