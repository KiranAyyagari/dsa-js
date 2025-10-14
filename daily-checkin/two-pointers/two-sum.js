var twoSum = function(nums, target) {
    let map = new Map();
    let arr = [];
    for(let i=0;i<nums.length;i++){
        const num = target - nums[i];
        if(map.has(num)){
            return [i, map.get(num)];
        }
        map.set(nums[i], i);
    }
    return [];
};