const comapnies = [
    {name: 'comany one', category: 'finance', start: 1998, end: 2018},
    {name: 'comany tw', category: 'military', start: 1992, end: 2011},
    {name: 'comany three', category: 'health center', start: 1921, end: 1950},
    {name: 'comany four', category: 'education', start: 1989, end: 2018},
    {name: 'comany five', category: 'security', start: 1990, end: 2019},
    {name: 'comany six', category: 'finance', start: 1998, end: 2012},
    {name: 'comany seven', category: 'technology', start: 1995, end: 2022},
    {name: 'comany eight', category: 'tourism', start: 1999, end: 2018},
    {name: 'comany nine', category: 'trade', start: 1992, end: 2015}

]

const ages = [23, 6, 12, 34, 56, 78, 54,32, 43,16, 19, 52]

// for 
// console.log("rsesults from for loop");
// for(let i = 0;i < comapnies.length; i++){
//      console.log(comapnies[i]);
// }
// console.log("rseults from forEach loop");
// comapnies.forEach(company => {
//     console.log(company.name);
// });

// filter 

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }

// let canDrink = ages.filter(age => age >= 21)
// console.log(canDrink);

// let longLastCompanies = comapnies.filter(company => company.end - company.start > 25);
// console.log(longLastCompanies);

// map 
// const companyNames = comapnies.map(company => company.name)
// console.log(companyNames);


// const sqrtAge = ages.map(age => Math.sqrt(age))
// console.log(sqrtAge);

// const sortedCompanies = comapnies.sort((company_1, company_2) => (company_1.start > company_2.start)? 1: -1);
// console.log(sortedCompanies);

// const sortedAges = ages.sort((a , b ) => a -b)
// console.log(sortedAges);

const ageSum = ages.reduce((total, age) => total + age , 0)
console.log(ageSum);

const totalYearsOfCompany = comapnies.reduce((total, company) => total + (company.end - company.start), 0)

console.log("Total years of all company is: ", totalYearsOfCompany);