const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');


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

