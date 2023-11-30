// problem 1 - creating json
let employees = [
        {
        "name" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligible" : "True"
        },
        {
        "name" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligible" : "True"
        },
        {
        "name" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raiseEligible" : "False"
        }
];
console.log("Problem 1:");
console.log(employees);

//problem 2 - company json including above employee json
let company = { 
        "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : employees
};
console.log("Problem 2:");
console.log(company);

// problem 3 - adding "Anna", "Tech", "Executive", "25600", "False" to both JSONs above
// appending to employees will update both employees and company
const newEmployee = {"name" : "Anna", "department" : "Tech", "designation" : "Executive", "salary" : 25600, "raiseEligible" : "False"};
// new employee goes to index 3 as the 4th employee
employees[3] = newEmployee;
console.log("Problem 3:");
console.log(employees);
console.log(company);

// problem 4 - calculate total salary for all company employees based on company JSON
let totalSal = 0;
for(i in company["employees"]){
    // check to make sure looping through right thing by seeing what i is
    //console.log(i);
    totalSal += company["employees"][i]["salary"];
};
// should be 105,300
console.log("Problem 4:");
console.log(totalSal);

// problem 5 - update salaries to 10% increase if raise eligible, then make not eligible
console.log("Problem 5:");
for (i in company["employees"]){
    if (company["employees"][i]["raiseEligible"] === "True"){
        // update 10%
        increase = company["employees"][i]["salary"] * .10;
        //console.log(increase);
        newSal = increase + company["employees"][i]["salary"];
        //console.log(newSal);
        // make false and change old sal to newSal
        company["employees"][i]["salary"] = newSal;
        company["employees"][i]["raiseEligible"] = "False";
    }

    // check all salaries and raise options
    // should be:
    // 44,000
    // False
    // 20,350
    // False
    // 21,200
    // False
    // 25,600
    // False
    // console.log(company["employees"][i]["salary"]);
    // console.log(company["employees"][i]["raiseEligible"]);
};
console.log(company);

// problem 6 - work from home addition
for (i in company["employees"]) {
    //don't need to push new info, can just add it as below:
    if(company["employees"][i]["name"] === "Anna" || company["employees"][i]["name"] === "Sam"){
        company["employees"][i]["wfh"] = "True";
    }
    else {
        company["employees"][i]["wfh"] = "False";
    }
}
console.log("Problem 6:");
console.log(company);