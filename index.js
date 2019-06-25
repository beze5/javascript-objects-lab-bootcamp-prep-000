var recipes = {};




/*correct
*/

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

/*correct
*/

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}




/* incorrect
*/
function destructivelyUpdateObjectWithKeyandValue(object, key, value){
  
}




/*incorrect
*/

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}



