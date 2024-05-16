let addressNumber = "18";
let addressStreet="Kiryat Sefer";
let country = "Israel";
let globalAddress = "I live in "+addressStreet+" "+addressNumber+", in "+country;
console.log(globalAddress);


let birhtYear = 1987;
let futureYear = 2030;
let age = futureYear-birhtYear;
let finalPhrase="I will be " + age + " in " +futureYear;
console.log(finalPhrase)


let pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1]);
pets.push('horse');
pets.splice(3,1);
console.log(pets);
console.log(pets.length);