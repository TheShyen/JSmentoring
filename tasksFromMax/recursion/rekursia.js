'use strict';

function sequenceSum(begin, end) {
    if (begin == end) {
        return begin;
    } else if (begin > end){
        return NaN;
    } 
    debugger;
    return begin + sequenceSum(begin + 1, end);
}

console.log(sequenceSum(1, 3));

function getStringCount() {
    
}