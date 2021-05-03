//extractValue
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extractValue(array, key){
    let newArray = array.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key]);
        return accumulator;
    }, [])
    return newArray;
}

//vowelCount
function vowelCount(string){
    let vowels = 'aeiou';
    let letters = [...string.toString()];
    let object = {a: 0, e: 0, i: 0, o: 0, u: 0};

    let vowelCounter = letters.reduce(function(accumulator, nextLetter){
        let lowercase = nextLetter.toLowerCase()
        if(vowels.indexOf(lowercase) !== -1){
            if(accumulator[lowercase]){
                accumulator[lowercase] += 1;
            }else{
                accumulator[lowercase] = 1;
            }
        }
        return accumulator;
    }, {});
    return vowelCounter;
}

//addKeyAndValue
const a = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyAndValue(array, key, value){
    let newArr = array.reduce(function(accumulator, nextValue, index){
        accumulator[index][key] = value;
        return accumulator;
    }, array)
    return newArr;
}

//partition
function partition(array, callback){
    let twoArrays = array.reduce(function(accumulator, nextValue){
        if(callback(nextValue)){
            accumulator[0].push(nextValue);
        }else{
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[],[]])
    return twoArrays;
}