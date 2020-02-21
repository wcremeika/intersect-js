/**
 * finds elements that exist in both sets of given
 * string string array
 * 
 * @param strArray an array of comma delimited strings
 */
function findIntersection(strArray) {
    if (strArray == null) {
        throw Error('missing or null argument: strArray');
    }

    let str1 = strArray[0] || null;
    let str2 = strArray[1] || null;

    if (str1 == null || str2 == null) {
        throw Error('missing or null elements');
    }
    
    let arr1 = str1.split(',');
    let arr2 = str2.split(',');

    let found = {}; // use object for constant-time lookup
    let i = 0, j = 0, result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            j++;
        }
        else {
            if (!found[arr1[i]]) {
                result.push(arr1[i]);
                found[arr1[i]] = true;
            }

            i++;
            j++;
        }
    }

    return result.join(',');
}

console.log(findIntersection(['1,3,3,4,5','2,3,9']));
console.log(findIntersection(['1,3,3,4,5,6','1,1,2,3,9']));

console.log('short way');
require('./intersect-short-way.js');

