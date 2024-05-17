//Exercise1

let firstYear = Number(2024);
let secondYear = Number(1987);
let youngerYear, ageDifference;
if (firstYear>secondYear){
    youngerYear = firstYear;
    ageDifference = firstYear-secondYear;
}
else{
    youngerYear = secondYear;
    ageDifference = secondYear-firstYear;
}

console.log(youngerYear+ageDifference);


//Exercise 2

let zip = prompt("please enter Zip code");
//part1

for(let i = 0; i<zip.length; i++){
    if (zip[i] < '0' || zipCode[i] > '9') {
        return "error";
    }    
}

if (zipCode.includes(" ") || zip.length!=5) {
    return "error";
}
else{
    console.log(success);
}

// part2

const zipPattern = /^\d{5}$/;
if (zipPattern.test(zip)) {
    console.log("success");
} else {
    console.log("error");
}