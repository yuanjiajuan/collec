'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_b=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      collection_b.push(collection[i])
      console.log(collection[i])
    }
  }
  return collection_b;
}

var collection_a = [1, 2, 3, 4, 5];
collect_all_even(collection_a)

module.exports = collect_all_even;
