//Exercise1

let person1 = {
    fullName: "John Smith",
    mass: 85,
    height: 190,
    calculateBMI: function(){
        return this.mass/(this.height*this.height);
    }
}

let person2 = {
    fullName: "Jane Doe",
    mass: 65,
    height: 165,
    calculateBMI: function(){
        return this.mass/(this.height*this.height);
    }
}

function compareBMI(person1, person2){
    let bmi1 = person1.calculateBMI;
    let bmi2 = person2.calculateBMI;
    if (bmi1 > bmi2) {
        return person1.fullName;
    } else if (bmi2 > bmi1) {
        return person2.fullName;
    } else {
        return "Both have the same BMI.";
    }
}

let result = compareBMI(person1, person2);
console.log(`The person with the largest BMI is: ${result}`);

//Exercise2

let gradesList = [80, 100, 65, 35];
findAvg(gradesList);
function findAvg(gradesList){
    let sum = getSum(gradesList);
    let avg = sum/gradesList.length;
    if (avg>65){
        console.log("You passed!");
    }
    else{
        console.log("You failed, you need to repeat the course");
    }
}

function getSum(gradesList){
    let res=0;
    gradesList.forEach(element => {
        res+= element;
    });
    return res;
}

