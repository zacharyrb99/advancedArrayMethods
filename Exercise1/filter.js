//filterByValue
function filterByValue(array, key){
    const valueFilter = array.filter(function(value){
        return value[key] !== undefined;
    })
    return valueFilter;
}

//find
function find(array, findValue){
    const findVal = array.filter(function(value){
        if(value == findValue){
            return value;
        }else{
            return undefined;
        }
    })[0];
    return findVal;
}

//findInObj
function findInObj(array, key, findValue){
    const findValueInObject = array.filter(function(value){
        return value[key] === findValue;
    })[0];
    return findValueInObject;
}

//removeVowels
function removeVowels(string){
    let lowercase = string.toLowerCase();
    let letters = [...lowercase];
    let vowels = 'aeiou';

    const noVowels = letters.filter(function(value){
        return vowels.indexOf(value) === -1;
    })

    return noVowels.toString();    
}

//doubleOddNumbers
function doubleOddNumbers(array){
    const odds = array.filter(function(num){
        if(num % 2 != 0){
            return num;
        }
    })
    const doubleOdds = odds.map(function(num){
        return num * 2;
    })
    return doubleOdds;
}