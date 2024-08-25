function getValues(collection) {
    if(Array.isArray(collection)) {
        return collection;
    } else {
        return Object.values(collection);
    }
}
function getKeys(collection) {
    if(Array.isArray(collection)) {
        return collection.map((_, idx) => idx);
    } else {
        return Object.keys(collection);
    }
}
function values(collection) {
    return getValues(collection);
}
function keys(collection) {
    return getKeys(collection);
}
function myEach(collection, callback) {
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for(let key in collection) {
            callback(collection[key], key, collection);
        }
    }
}

module.exports = {
    getValues,
    getKeys,
    values,
    keys,
    myEach
}

function myMap(collection, callback) {
    const arr = [];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            arr.push(callback(collection[i], i, collection));
        }
    } else {
        for(let key in collection) {
            arr.push(callback(collection[key], key, collection));
        }
    }
    return arr;
}

function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], i, collection);
        }
    } else {
        for(let key in collection) {
            accumulator = callback(accumulator, collection[key], key, collection);
        }
    }
    return accumulator;
}

function myFind(collection, callback) {
    let result;
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            if(callback(collection[i], i, collection)) {
                result = collection[i];
                break;
            }
        }
    } else {
        for(let key in collection) {
            if(callback(collection[key], key, collection)) {
                result = collection[key];
                break;
            }
        }
    }
    return result;
}

function myFilter(collection, callback) {
    const arr = [];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            if(callback(collection[i], i, collection)) {
                arr.push(collection[i]);
            }
        }
    } else {
        for(let key in collection) {
            if(callback(collection[key], key, collection)) {
                arr.push(collection[key]);
            }
        }
    }
    return arr;
}

function mySize(collection) {
    if(Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(collection, n = 1) {
    if(Array.isArray(collection)) {
        return collection.slice(0, n);
    } else {
        return Object.values(collection).slice(0, n);
    }
}

function myLast(collection, n = 1) {
    if(Array.isArray(collection)) {
        return collection.slice(-n);
    } else {
        return Object.values(collection).slice(-n);
    }
}

function mySortBy(collection, callback) {
    if(Array.isArray(collection)) {
        return collection.sort(callback);
    } else {
        return Object.values(collection).sort(callback);
    }
}

function myFlatten(array, shallow = false, newArr = []) {
    if(shallow) {
        for(let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])) {
                myFlatten(array[i], shallow, newArr);
            } else {
                newArr.push(array[i]);
            }
        }
    } else {
        for(let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])) {
                myFlatten(array[i], shallow, newArr);
            } else {
                newArr.push(array[i]);
            }
        }
    }
    return newArr;
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}