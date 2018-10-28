const sum = (a,b) => a+b;

const make = (...args)=>{
  let val = [];
  val.push(args.reduce(sum));
  function f(...args){
    if(typeof args[0] === 'function'){
      val = val.reduce(sum);
    }
    else{
      val = val.concat(args);
    }
    return f;
  }
  f.toString = function(){return val;}
  return f;
}
module.exports = make;