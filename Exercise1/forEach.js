const numbers = [15, 30, 45, 60, 75] //for doubleValues and onlyEvenValues

//doubleValues
function doubleValues(array){
    let doubled = [];
    array.forEach(function(value){
        doubled.push(value * 2);
    })
    return doubled;
}

//onlyEvenValues
function onlyEvenValues(array){
    let onlyEven = [];
    array.forEach(function(value){
        if((value % 2) === 0){
            onlyEven.push(value);
        }
    })
    return onlyEven;
}

const names = ['zach', 'mariah', 'matt', 'colt', 'emilie']; //for showFirstAndLast

//showFirstAndLast
function showFirstAndLast(array){
    let onlyFirstAndLast = [];
    array.forEach(function(value){
        onlyFirstAndLast.push(value[0] + value[value.length -1]);
    })
    return onlyFirstAndLast;
}

//addKeyAndValue
function addKeyAndValue(array, key, value){
    array.forEach(function(val){
        val[key] = value;
    })
    return array;
}

//vowelCount
function vowelCount(string){
    const vowels = 'aeiou';
    let letters = [...string];
    let object = {a: 0, e: 0, i: 0, o: 0, u: 0};

    letters.forEach(function(char){
        let lowercase = char.toLowerCase()
        if(vowels.indexOf(lowercase) != -1){
            if(lowercase == 'a'){
                object.a += 1;
            }else if(lowercase == 'e'){
                object.e += 1;
            }else if(lowercase == 'i'){
                object.i += 1;
            }else if(lowercase == 'o'){
                object.o += 1;
            }else if(lowercase == 'u'){
                object.u += 1;
            }
        }
    });
    return object;
}
