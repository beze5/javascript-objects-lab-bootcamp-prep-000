var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({object}, { key: 'value' });
  return object;
}

function destructivelyUpdateObjectWithKeyandValue(object, key, value){
  object[key] = value; 
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
}


