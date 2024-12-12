#Exercise 1


def first_and_last(numbers: list) -> int:
    if not numbers:  # Handle edge case of an empty list
        return 0
    return numbers[0] + numbers[-1]

#Time Complexity: O(1)

#Exercise 2:

def duplicates_count(numbers: list) -> int:
    seen = set()
    duplicates = set()
    
    for num in numbers:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    
    return len(duplicates)
#Time Complexity: O(n)

#Exercise 3

def pair_sum_zero(numbers: list) -> list:
    seen = set()
    result = set()
    
    for num in numbers:
        target = -num
        if target in seen:
            result.add((min(num, target), max(num, target)))  # Ensure unique pairs
        seen.add(num)
    
    return list(result)

#Time Complexity: O(n)