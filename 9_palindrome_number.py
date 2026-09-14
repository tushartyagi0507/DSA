class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        arr = [int(i) for i in str(x)]
        left = 0
        right = len(arr) - 1
        while left < right:
            if arr[left] != arr[right]:
                return False
            left += 1
            right -= 1 

        return True


solution = Solution()
solution.isPalindrome(121)