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




/* incorrect - wait and do the rest first
*/
function destructivelyUpdateObjectWithKeyandValue(object, key, value){
  object[key] = value;
  return object;
}



/*incorrect
*/

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}



