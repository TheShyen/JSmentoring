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

function getStringCount(object) {
    if (typeof object == 'string'){
        return 1;
    } 
  
    if (!object) {
        return 0;
    } 
    debugger;
    return Object.values(object).reduce((acc, current) => acc + getStringCount(current), 0);
  }
  
  console.log(getStringCount({
    first: '1',
    second: {aas:{a : ['sdsd'], b : ['sdsd'], c : ['sdsd']}},
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
  })); // 3
  
  console.log(getStringCount(['1', '2', ['3']]));