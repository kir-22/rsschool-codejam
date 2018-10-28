let recursion = function(tree){
  if(!tree) return [];
  let array = [];

  search(tree, 1);
  function search(tree, lvl){
    if(tree){
      if(array.length < lvl) array.push([]);
    
      let arr=array[lvl-1];
      arr.push(tree.value);
      search(tree.left, lvl+1);
      search(tree.right, lvl+1);
    }
    else{
      return;
    }
  }
  return array;
}
module.exports = recursion;