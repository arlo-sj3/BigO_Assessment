// O(1)

function findFirst(items){
  return items[0]
}

//0(n)

function findThing(items, thing) {
     for (var i=0; i < items.length; i++) {
          if (items[i] === match) {
               return true;
          }
     }
     return false;
}

//O(n^2)

function twoDArray(arr){
for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
        return(arr[i][j]);
    }
}
}
