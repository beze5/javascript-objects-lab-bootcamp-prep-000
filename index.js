var recipes = {};

/*1 
*/
function updateObjectWithKeyAndValue(object, key, value){
  object;
  return object;
}



/*2
*/
function destructivelyUpdateObjectWithKeyandValue(object, key, value){
  object[key] = value; 
  return object;
}



/*3
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



