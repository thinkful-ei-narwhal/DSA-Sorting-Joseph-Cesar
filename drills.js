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

/*

*/ 