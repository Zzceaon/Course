## 分治
分而治之

## 快排
- partition算法
    1.基准值
    2.比基准值小的数 基准值 比基准值大的数
        1.left: 从数组左边往后扫描, 比基准值大的数切换到后面去, 如果找不到, 继续扫描
        1.right: 从数组右边往前扫描, 比基准值小的数切换到前面去, 如果找不到, 继续扫描
        3.left !< right: 找到了基准值的正确位置
    3.基准值归位

## KthLarge
1.排序(从大到小)
    index
    [3, 2, 1, 5, 6, 4] 2
    6 5
2.第K个最大元素