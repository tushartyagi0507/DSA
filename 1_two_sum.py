class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, value in enumerate(nums):
            needed = target - value

            if needed in seen:
                return [i, seen[needed]]

            seen[value] = i

solution = Solution()
solution.twoSum([2,7,11,15], 9 )