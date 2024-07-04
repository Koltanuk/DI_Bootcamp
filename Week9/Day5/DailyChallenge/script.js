function areAnagrams(str1, str2) {

    function cleanString(str) {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }

    const cleanedStr1 = cleanString(str1);
    const cleanedStr2 = cleanString(str2);

    return cleanedStr1 === cleanedStr2;
}

// Example usage
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true
console.log(areAnagrams("The Morse Code", "Here come dots")); // true
console.log(areAnagrams("Hello", "Olelh")); // true
console.log(areAnagrams("Hello", "World")); // false
