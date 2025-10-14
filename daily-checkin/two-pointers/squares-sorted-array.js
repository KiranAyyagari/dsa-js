var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let result = new Array(nums.length);
    let resultPointer = nums.length-1;
    while(left<=right){
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if(leftSquare > rightSquare){
            result[resultPointer] = leftSquare;
            left++;
        }
        else{
            result[resultPointer] = rightSquare;
            right--;
        }
        resultPointer--;
    }
    return result;
};