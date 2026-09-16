class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)):
            if i == 0 :
                nums[i] = nums[i]
                continue
            nums[i] = nums[i-1] + nums[i]
        return nums

solution = Solution()
solution.runningSum([1,2,3,4])