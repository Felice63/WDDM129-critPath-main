function getWeekNumber(d) {
  // Save the date to the variable d
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

let result = getWeekNumber(new Date());

/*
Note that returning =>    result
gives the array      =>    [2022, 1]  the current year and week number
We can pull the indices of the array with the week at result[1] and year at result[0]
There are only those two indices; 0 and 1
The typeof(result[i]) is "number". 

Set a  "data-weekNum" attribute in the HTML on each table row
The attributted value will be a number that corresponds to the actual week number in the current year
With  ==> result[1]  yeilding the current week number.


1) Query the HTML doc to find all table rows with class='thisWeek'.

This creates an array. Set this query equal to ==>  tblRwQry

tblRwQry[n]  returns the entire <tr> element at the particular index, n, showing all attributes in that selected element

To get the selected weekNum attribute's value, choose an n:

tblRwQry[n].dataset.weeknum


2) Create a function to return each value in the data-weekNum attribute:

tblRwQry.forEach(myFunct);

function myFunct(tr) {
let theWkNum = tr.getAttribute('data-weekNum');
// console.log(theWkNum);
}


3) Loop through each value in the array to see if it's equal to result[1]

result[1] will change on a weekly basis

******************
START SCRIPT BELOW
******************
*
*
*/


// Get all the tr selectors that have the .thisweek class
let tblRwQry = document.querySelectorAll('.thisWeek');

// Get the data attribute value of each tr in the HTML doc
tblRwQry.forEach(myFunct);

function myFunct(tr) {
  let theWkNum = tr.getAttribute('data-weekNum');
}

// Conditional to loop through each tblRwQry
for(i = 0; i < tblRwQry.length; i++){
// Find the matching data-weekNum value
if (result[1] == tblRwQry[i].dataset.weeknum) {
// apply a different background colour to the found table row via a class addition 
tblRwQry[i].classList.add("wearehere");
// Log the found data-weekNum value to the console
console.log(tblRwQry[i].dataset.weeknum);
}

}

// Scroll to focus on the wearejhere class

document.getElementsByClassName("thisWeek wearehere")[0].scrollIntoView();

/*
NOTE: to get a future week number I can use the function above: getWeekNumber() and pass the newDate() function to it as a parameter.

For the new Date() function, add the parameters year, month, day
Note that January is month number 00
and Jan 1 2023 is a Sunday, but the weekday starts on a Monday, so to get the first week of January 2023, use this:

getWeekNumber(new Date(2023, 00, 02));

*/