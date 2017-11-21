//Takes an array of JSON and groups objects in an array based on the head key.
//Data is collected in the values key.
function convertJSONArray2HeaderArray(arr,head,values){
  var headerArray = arr.map( function(item) {return item[this];},String(head));

  headerArray = headerArray.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
  });

  var headerArray = headerArray.map( function(item) {
    var newObject = new Object();
    newObject[String(head)]=item;
    newObject[String(values)]=[];
    return newObject;
  });

  for(var i =0;i<arr.length;i++){
    var keyname = arr[i][String(head)];
    for(var j=0;j<headerArray.length;j++){
      if(headerArray[j][String(head)]==keyname){
        break;
      }
    }
    headerArray[j][String(values)].push(arr[i]);
  }
  return headerArray;
}

//Reverts an array with header to a simple JSON array. Data is held in the values key.
function convertHeaderArray2JSONArray(headerArray,values){
  var JSONArray = [];
  headerArray.forEach(function(item){
      JSONArray = JSONArray.concat(item[String(values)]);
  });
  return JSONArray;
}
