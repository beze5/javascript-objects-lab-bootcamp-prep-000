var recipes = {};




/*correct
*/

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}




/*1 - incorrect
*/
function destructivelyUpdateObjectWithKeyandValue(object, key, value){
  object[key] = value; 
  return object;
}



/*2 - correct
*/

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

/*4 and 5
*/

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}



