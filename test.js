const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');
const make = require('./make');

describe('sumOfOther', () =>{
  it('1',()=>{
    let array = [2, 3, 4, 1];
    array = sumOfOther(array);
    assert.deepEqual(array, [8, 7, 6, 9]);
  })
  it('2', ()=>{
    let array = [5, 0, 0, 0];
    array = sumOfOther(array);
    assert.deepEqual(array, [0,5,5,5]);
  })
})
describe('make', ()=>{
  const sum = (a,b) => a+b;
  it('1',()=>{
    const res=make(15)(34, 21, 666)(41)(sum);
    assert.equal(res,777);
  })
  it('2',()=>{
    const res=make(1)(2, 3, 4)(5)(sum);
    assert.equal(res,15);
  })
})
