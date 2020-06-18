// 1. Understanding merge sort
// given this array [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
/*
  1. The array of [21, 1] will be the third recursive call

                        [21,1,26,45,29,28,2,9,16,49,39,27,43,34,46,40]
              [21,1,26,45,29,28,2,9]                      [16,49,39,27,43,34,46,40]
          [21,1,26,45]         [29,28,2,9]               [16,49,39,27]    [43,34,46,40]
      [21,1]  [26,45]         [29,28]  [2,9]          [16,49]  [39,27]       [43,34]  [46,40]
    [21] [1]  [26] [45]     [29] [28]  [2] [9]      [16] [49]  [39] [27]   [43] [34]  [46] [40]                                            
  
  2. The array of [46, 40] will be the 16th recursive call

  3. The first two lists to be merged are [21] and [1]

  4. [21,1,26,45] [29,28,2,9] are the two lists used on the 7th merge
*/


// 2. Understanding quicksort
/*
  1. c) Neither 14 nor 17 could have been the pivot

  2. [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

    LAST ITEM IN PIVOT
    [10, 17, 13, 15, 19, 14, 3, 16, 9, 12]
    
    FIRST ITEM IN PIVOT
    Because the first item is pivot, we start at the end of the array and loop backwards.
    [14, 17, 13, 15, 19, 10, 3, 12, 9, 16]
*/ 

// 3. Implementing quicksort

