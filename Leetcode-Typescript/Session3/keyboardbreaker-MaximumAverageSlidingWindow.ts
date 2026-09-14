function findMaxAverage(nums: number[], windowLength: number): number {
    let windowSum = 0;

    //calculate the first window and set it as a max.
    for(let i = 0; i < windowLength; i++) {
        windowSum += nums[i];
    }

    let windowAverage = windowSum / windowLength;
    let maxAverage = windowAverage;
    
    //e.g nums[4] - nums[0]
    //next item - previous item, reusing existing sum.
    //i used inspiration windowSum from here:
    //https://www.geeksforgeeks.org/dsa/window-sliding-technique/
    for(let i = windowLength; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - windowLength];
        let currentAverage = windowSum / windowLength;

        maxAverage = Math.max(currentAverage, maxAverage);
    }
    return maxAverage;
};
