class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window_sum = sum(nums[:k])
        max_sum = window_sum

        for right in range(k, len(nums)):
            incoming = nums[right]
            outgoing = nums[right - k]

            window_sum = window_sum - outgoing + incoming

            if window_sum > max_sum:
                max_sum = window_sum

        return max_sum / k

solution = Solution()
solution.findMaxAverage([1,12,-5,-6,50,3], 4)