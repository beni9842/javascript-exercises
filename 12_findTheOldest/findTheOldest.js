const findTheOldest = function(people) {
    let oldest;
    let age = 0;
    people.forEach(person => {
        let currAge;
        
        if (person.yearOfDeath) {
            currAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currAge = 2021 - person.yearOfBirth;
        }
        
        if (currAge > age) {
            age = currAge
            oldest = person;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
