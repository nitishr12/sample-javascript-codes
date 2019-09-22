var climbStairs = function(n) {
    // At every step, compute the ways of climbing stairs from that state
    // Memoize the solution so that running time can be reduced to O(n)
    return climbStairsDP({}, n)
};

function climbStairsDP(ways, n) {
    if(n < 0){
        return 0;
    }
    else if(n==0){
        return 1;
    }
    else if(ways[n]){
        return ways[n];
    }
    else{
        ways[n] = climbStairsDP(ways, n-1) + climbStairsDP(ways, n-2);
        return ways[n];
    }
}