def subsetsum(numbers: list, target: int) -> bool:
    seen = set()  
    
    for num in numbers:
        complement = target - num  # Calculate the complement needed to reach the target
        
        if complement in seen:
            print(f"True: {num}, {complement}")
            return True
        
        seen.add(num)
    
    print("False")
    return False

nums = [12, -7, 20, 1, 4, -10, -1]

subsetsum(nums, 1)  # Output: False
subsetsum(nums, 2)  # Output: True: 12, -10
subsetsum(nums, 3)  # Output: True: 4, -1
subsetsum(nums, 4)  # Output: False