class Solution:
    def totalFruit(self, fruits: list[int]) -> int:
        # Given an array, find the longest contiguous subarray containing at most 2 distinct numbers.
        left = 0
        max_length = 0
        freq = {}
        current_length = max_length

        for right in range(len(fruits)):
            if fruits[right] in freq:
                freq[fruits[right]] = freq[fruits[right]] + 1
            
            else:
                freq[fruits[right]] = 1

            while len(freq) > 2:
                if fruits[left] in freq:
                    freq[fruits[left]] = freq[fruits[left]] - 1
                    if freq[fruits[left]] == 0:
                        del freq[fruits[left]]
                left += 1

            current_length = right - left + 1

            max_length = max(max_length, current_length)

        return max_length 

solution = Solution()
solution.totalFruit([1,2,1])