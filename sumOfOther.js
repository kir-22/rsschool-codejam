const sumOfOther = (array) => {
	const result = []; 
	array.forEach(element => {
		result.push(array.reduce((a,b)=> a+b)-element);
	});
	return result;
};
module.exports = sumOfOther;