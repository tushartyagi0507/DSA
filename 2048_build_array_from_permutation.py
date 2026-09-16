class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans  = [None] * len(nums)
        for i in range(len(nums)):
            ans[i] = nums[nums[i]]
        return ans

solution = Solution()
solution.buildArray([0,2,1,5,3,4])