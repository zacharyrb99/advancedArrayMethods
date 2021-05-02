//hasOddNumber
function hasOddNumber(array){
    let hasOdds = array.some(function(value){
        return value % 2 !== 0;
    });
    return hasOdds;
}

//hasAZero
function hasAZero(number){
    let array = [...number.toString()]
    let containsZero = array.some(function(value){
        return value == 0;
    });
    return containsZero;
}

//hasOnlyOddNumbers
function hasOnlyOddNumbers(array){
    let onlyOdds = array.every(function(value){
        return value % 2 !== 0;
    })
    return onlyOdds;
}

//hasNoDuplicates
function hasNoDuplicates(array){
    let noDupes = array.every(function(value){
        return array.indexOf(value) === array.lastIndexOf(value);
    })
    return noDupes;
}

//hasCertainKey
let arr = [
    {title: 'Instructor', first: 'Elie', last: 'Schoppik'},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

function hasCertainKey(array, key){
    let containsKey = array.every(function(value){
        return value[key];
    })
    return containsKey;
}

//hasCertainValue
function hasCertainValue(array, key, value){
    let containsValue = array.every(function(val){
        return val[key] == value;
    })
    return containsValue;
}