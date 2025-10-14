var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);

    let closestSum = nums[0]+nums[1]+nums[2];

    for(let i=0;i<nums.length;i++){
        let left = i+1;
        let right = nums.length-1;
        if(i>0 && nums[i] === nums[i-1]) continue;
        while(left<right){
            let currentSum = nums[i]+nums[left]+nums[right];
            if(currentSum === target){
                return currentSum;
            }
            else if(currentSum <target){
                left++;
            }
            else{
                right--;
            }
            if(Math.abs(currentSum - target )< Math.abs(closestSum - target)){
                closestSum = currentSum;
            }

        }
    }
    return closestSum;
};