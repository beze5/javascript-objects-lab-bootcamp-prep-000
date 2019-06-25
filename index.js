var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({object}, { key: 'value' });
  return newRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var object = {key: value}
}