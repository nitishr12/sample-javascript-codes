var findMedianSortedArrays = function(nums1, nums2) {
    // If # of elements is odd, just find the median
    // If # is even, find the middle two elements
    // Do not sort the entire array
    let size = nums1.length + nums2.length
    let medianIndex = []
    let median = 0;
    let i = 0
    let j = 0
    if(size%2 == 0){
        medianIndex.push((size/2)-1);
        medianIndex.push(size/2);
    }
    else{
        medianIndex.push(parseInt(size/2));
    }
    
    for(let k=0; k<=parseInt(size/2);k++){
        let value = -1;
        if(nums2[j]==undefined||nums1[i]<=nums2[j]){
            value = nums1[i]
            i = i+1
        }
        else{
            value = nums2[j]
            j =j+1
        }
        if(medianIndex.includes(i+j-1)){
            median += value
        }
    }
    return median/medianIndex.length
};