function dogNames (array){
	if (!array) {return[];}
	return array.map(function(dogObj){
		return dogObj.name;
	});
	
}

function dogSize(array, size){
	return array.filter(function (dobObj){
		if (dogObj.size === size) {
			return true;
		} else{
			return false;
		}
	});
}
module.exports = {
	dogNames: dogNames
};