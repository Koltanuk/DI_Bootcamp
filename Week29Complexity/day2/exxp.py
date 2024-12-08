#Exercise 1

for i in range(10):
    print(i)
# time complexity O(1)


for i in range(n):
    for j in range(n):
        print(i, j)
# time complexity O(n^2)

i = 1
while i < n:
    i *= 2
    print(i)
# time complexity O(log n)    


#Exercise2

numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list) -> None:
    for i in range(1, len(numbers)):
        key = numbers[i]
        j = i - 1
        while j >= 0 and numbers[j] > key:
            numbers[j + 1] = numbers[j]
            j -= 1
        numbers[j + 1] = key

insertion_sort(numbers) # sorts the numbers list
print(numbers) # check that the sorting is successfull

#Exercise3

numbers = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int) -> int:
    low, high = 0, len(numbers) - 1
    while low <= high:
        mid = (low + high) // 2
        if numbers[mid] == value:
            return mid
        elif numbers[mid] < value:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # Return -1 if the value is not found

index = binary_search(numbers, 7)  # returns 3
print(index)
