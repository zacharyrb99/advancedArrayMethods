//doubleValuesWithMap
function doubleValuesWithMap(array){
    const doubledMap = array.map(function(num){
        return num * 2;
    })
    return doubledMap;
}

//valTimesIndex
function valTimesIndex(array){
    const numberTimesIndex = array.map(function(num, index){
        return num * index;
    })
    return numberTimesIndex;
}

//extractKey
function extractKey(array){
    const getKey = array.map(function(array, key){
        for(let key in array){
            return array[key];
        }
    })
    return getKey;
}

//extractFullName
function extractFullName(array){
    const getFullName = array.map(function(array){
        let firstName = array.first;
        let lastName = array.last;
        for(let name in array){
            return (`${firstName} ${lastName}`);
        }
    })
    return getFullName;
}

