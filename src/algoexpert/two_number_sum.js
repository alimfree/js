function twoNumberSum(array, targetSum) {
  // Write your code here.
	result = []; 
  reverse = array.reverse();
	for(i=0; i <= array.length -1; i++){
		for(j=0; j <= reverse.length-1; j++){
			sum = parseFloat(array[i]) + parseFloat(array[j])
			if( sum == targetSum && !result.includes(array[i] && !result.includes(array[j]) )){
				result.push(array[i]);
				result.push(array[j]);
				return result.sort(function(a, b){return a-b});
			}	
		}
	}
	return result;
}
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;


