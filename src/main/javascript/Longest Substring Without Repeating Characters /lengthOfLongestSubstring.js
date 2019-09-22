var lengthOfLongestSubstring = function(s) {
    // Step 1: define unique array
    // Step 2: initialize counts
    // Step 3: Iterate through the string, keep adding unique chars to array
    // Step 4: If duplicate found, remove all the letters before the duplicate letter from array and insert the new letter
    
    let uniqueChars = []
    let largestCount = 0
    let currentCount = 0
    for(let c in s){
        if(uniqueChars.includes(s[c])){
            let i = uniqueChars.indexOf(s[c]);
            uniqueChars = uniqueChars.splice(i+1, uniqueChars.length);  
        }
        uniqueChars.push(s[c]);
        currentCount = uniqueChars.length
        if(currentCount > largestCount){
            largestCount = currentCount;
        }
    }
    return largestCount;
};